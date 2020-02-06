/* eslint-disable max-lines-per-function */
import React from 'react'
import { connect } from 'react-redux'


// export const CompletedCard = ({ round }) => (
//                 <div className="insertCompletedWordsHere">
//                         <div className="completedWord__container" >
//                             <div className="compltedword--word--definition">
//                                 <div className="compltedword--word--pos">
//                                     <p className="completedWord__p--word">Propel</p>
//                                     <p className="completedWord__p--pos">(verb)</p>
//                                 </div>
//                                 <p className="completedWord__p--def">definition</p>
//                             </div>
//                                 <p className="completedWord__p--sentence">The young girl often wondered how NASA was able to propel shuttles into space.</p>
//                         </div>
//                     </div>
// )

export const CompletedWarmUpCard = ({ prefix, meaning, currentRound }) => {
  const completedStructure = {
    0: (
      <div key={prefix.id} className="completedWord__container">
        <div className="compltedword--word--definition">
          <div className="compltedword--word--pos">
            <p className="completedWord__p--word"><b>{prefix.prefix}</b></p>
          </div>
        </div>
          <p className="completedWord__p--pos">means <b>{meaning.prefix}</b></p>
      </div>
    ),
    1: (
        <div key={prefix.id} className="completedWord__container">
          <div className="compltedword--word--definition">
            <div className="compltedword--word--pos">
              <p className="completedWord__p--word"><b><i>{prefix.prefix}</i></b> means <b>{meaning.prefix}</b></p>
            </div>
          </div>
          {/* <p className="completedWord__p--pos">{meaning.prefix}</p> */}
          {/* <p className="completedWord__p--sentence">The young girl often wondered how NASA was able to propel shuttles into space.</p> */}
        </div>
      ),
  }

  //   console.log(completedStructure[0])
  return (
    <>
      {completedStructure[currentRound]}
    </>
  )
}


const mapStateToProps = ({ currentRound }) => ({ currentRound })

export default connect(mapStateToProps)(CompletedWarmUpCard)
