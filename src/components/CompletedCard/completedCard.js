import React from 'react'
import './completedCard.css'

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

export const CompletedWarmUpCard = ({ prefix, meaning }) => {
    console.log("I SHOUDL BE APPENDING TO THE DOM", prefix, meaning)
  return (
        <div className="insertCompletedWordsHere">
            <div className="completedWord__container" >
                <div className="compltedword--word--definition">
                    <div className="compltedword--word--pos">
                        <p className="completedWord__p--word">{prefix.prefix}</p>
                    </div>
                </div>
                    <p className="completedWord__p--pos">{meaning.prefix}</p>
                    {/* <p className="completedWord__p--sentence">The young girl often wondered how NASA was able to propel shuttles into space.</p> */}
            </div>
        </div>
  )
}


export default CompletedWarmUpCard
