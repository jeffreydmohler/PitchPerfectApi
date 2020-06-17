var express = require('express')
var path = require('path')
var router = express.Router()
const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node-gpu')
let tfmodel = ''

const scaler_params = require(`../model/scaler_params.json`)

;(async function () {
  let current = path.dirname(__filename)
  const handler = tfnode.io.fileSystem(path.join(current, '../model/model.json'))
  tfmodel = await tf.loadLayersModel(handler)
  console.log('Model loaded')
})()

let columns = [
  'description_numeric',
  'balls',
  'strikes',
  'outs_when_up',
  'inning',
  'at_bat_number',
  'pitch_number',
  'home_score',
  'away_score',
  'on_1b_boolean',
  'on_2b_boolean',
  'on_3b_boolean',
  'stand_L',
  'stand_R',
  'p_throws_L',
  'p_throws_R',
  'inning_topbot_Bot',
  'inning_topbot_Top',
  'if_fielding_alignment_-',
  'if_fielding_alignment_Infield shift',
  'if_fielding_alignment_Standard',
  'if_fielding_alignment_Strategic',
  'of_fielding_alignment_-',
  'of_fielding_alignment_4th outfielder',
  'of_fielding_alignment_Extreme outfield shift',
  'of_fielding_alignment_Standard',
  'of_fielding_alignment_Strategic',
  'home_team_ARI',
  'home_team_ATL',
  'home_team_BAL',
  'home_team_BOS',
  'home_team_CHC',
  'home_team_CIN',
  'home_team_CLE',
  'home_team_COL',
  'home_team_CWS',
  'home_team_DET',
  'home_team_HOU',
  'home_team_KC',
  'home_team_LAA',
  'home_team_LAD',
  'home_team_MIA',
  'home_team_MIL',
  'home_team_MIN',
  'home_team_NYM',
  'home_team_NYY',
  'home_team_OAK',
  'home_team_PHI',
  'home_team_PIT',
  'home_team_SD',
  'home_team_SEA',
  'home_team_SF',
  'home_team_STL',
  'home_team_TB',
  'home_team_TEX',
  'home_team_TOR',
  'home_team_WSH',
  'away_team_ARI',
  'away_team_ATL',
  'away_team_BAL',
  'away_team_BOS',
  'away_team_CHC',
  'away_team_CIN',
  'away_team_CLE',
  'away_team_COL',
  'away_team_CWS',
  'away_team_DET',
  'away_team_HOU',
  'away_team_KC',
  'away_team_LAA',
  'away_team_LAD',
  'away_team_MIA',
  'away_team_MIL',
  'away_team_MIN',
  'away_team_NYM',
  'away_team_NYY',
  'away_team_OAK',
  'away_team_PHI',
  'away_team_PIT',
  'away_team_SD',
  'away_team_SEA',
  'away_team_SF',
  'away_team_STL',
  'away_team_TB',
  'away_team_TEX',
  'away_team_TOR',
  'away_team_WSH'
]

let result_options = ['Slider', '4-Seam Fastball', 'Changeup', 'Curveball', 'Sinker', '2-Seam Fastball', 'Knuckle Curve', 'Split Finger', 'Knuckle Ball']

let teams = ['ARI', 'ATL', 'BAL', 'BOS', 'CHC', 'CIN', 'CLE', 'COL', 'CWS', 'DET', 'HOU', 'KC', 'LAA', 'LAD', 'MIA', 'MIL', 'MIN', 'NYM', 'NYY', 'OAK', 'PHI', 'PIT', 'SD', 'SEA', 'SF', 'STL', 'TB', 'TEX', 'TOR', 'WSH']
let descriptions = ['ball', 'blocked_ball', 'bunt_foul_tip', 'called_strike', 'foul', 'foul_bunt', 'foul_tip', 'hit_by_pitch', 'hit_into_play', 'hit_into_play_no_out', 'hit_into_play_score', 'missed_bunt', 'pitchout', 'swinging_strike', 'swinging_strike_blocked']
let descriptions_map = {
  'Called Strike': 'called_strike',
  Ball: 'ball',
  'Hit into Play and Score': 'hit_into_play_score',
  'Swinging Strike': 'swinging_strike',
  'Hit into Play': 'hit_into_play',
  'Foul Tip': 'foul_tip',
  'Hit into Play No Out': 'hit_into_play_no_out',
  'Foul Ball': 'foul',
  'Swinging Strike Blocked': 'swinging_strike_blocked',
  'Blocked Ball': 'blocked_ball',
  'Foul Bunt': 'foul_bunt',
  Pitchout: 'pitchout',
  'Hit By Pitch': 'hit_by_pitch',
  'Missed Bunt': 'missed_bunt',
  'Bunt Foul Tip': 'bunt_foul_tip'
}

/* GET home page. */
router.post('/predictm', function (req, res, next) {
  console.log('predicting')

  try {
    let values = {}

    req.body = req.body.values

    console.log(req.body)

    let desc = descriptions_map[req.body.outcome]

    values['description_numeric'] = descriptions.indexOf(desc)
    values['strikes'] = req.body.strikes
    values['outs_when_up'] = req.body.outs
    values['balls'] = req.body.balls
    values['inning'] = req.body.inning
    values['at_bat_number'] = req.body.atbat
    values['pitch_number'] = req.body.pitchnumber
    values['home_score'] = req.body.homeScore
    values['away_score'] = req.body.awayScore
    values['on_1b_boolean'] = req.body.base1 == 0 ? 0 : 1
    values['on_2b_boolean'] = req.body.base2 == 0 ? 0 : 1
    values['on_3b_boolean'] = req.body.base3 == 0 ? 0 : 1
    values['stand_L'] = req.body.batter == 'L' ? 1 : 0
    values['stand_R'] = req.body.batter == 'R' ? 1 : 0
    values['p_throws_L'] = req.body.pitcher == 'L' ? 1 : 0
    values['p_throws_R'] = req.body.pitcher == 'R' ? 1 : 0
    values['inning_topbot_Bot'] = req.body.topbottom == 'B' ? 1 : 0
    values['inning_topbot_Top'] = req.body.topbottom == 'T' ? 1 : 0
    values['if_fielding_alignment_-'] = 0
    values['if_fielding_alignment_Infield shift'] = req.body.infield == 'Infield Shift' ? 1 : 0
    values['if_fielding_alignment_Standard'] = req.body.infield == 'Standard' ? 1 : 0
    values['if_fielding_alignment_Strategic'] = req.body.infield == 'Strategic' ? 1 : 0
    values['of_fielding_alignment_-'] = 0
    values['of_fielding_alignment_Extreme outfield shift'] = 0
    values['of_fielding_alignment_4th outfielder'] = req.body.outfield == '4th Outfielder' ? 1 : 0
    values['of_fielding_alignment_Standard'] = req.body.outfield == 'Standard' ? 1 : 0
    values['of_fielding_alignment_Strategic'] = req.body.outfield == 'Strategic' ? 1 : 0
    teams.forEach((team) => {
      values[`home_team_${team}`] = 0
      values[`away_team_${team}`] = 0
    })
    let ht = req.body['homeTeam']
    let at = req.body['awayTeam']
    values[`home_team_${ht}`] = 1
    values[`away_team_${at}`] = 1

    console.log(values)

    let ordered = []
    columns.forEach((col) => {
      let value = values[col]
      ordered.push(value)
    })

    let scaled = standardScale(ordered, scaler_params)

    let tensor = tf.stack(scaled)
    tensor = tf.reshape(tensor, [1, 87], 'resize')

    const prediction = tfmodel.predict(tensor).dataSync()
    let prediction_result = 0
    let prediction_high = 0
    prediction.forEach((pred, i) => {
      if (pred > prediction_high) {
        prediction_result = i
        prediction_high = pred
      }
    })

    let pitch_type = result_options[prediction_result]

    res.send(JSON.stringify(pitch_type))
  } catch (e) {
    console.log('error!', e)
  }
})

module.exports = router

function standardScale(data, scaler_params) {
  const means = scaler_params.means
  const variances = scaler_params.variances

  let scaled = data.map((item, index) => {
    let mean = means[index]
    let variance = variances[index]
    let stddev = Math.pow(variance, 0.5)
    let scaledItem
    if (stddev !== 0) {
      scaledItem = (item - mean) / stddev
    } else {
      scaledItem = item - mean
    }
    return scaledItem
  })

  return scaled
}
