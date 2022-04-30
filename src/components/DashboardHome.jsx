import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {GetMealsReport} from '../actions/HomeActions'
import { toast } from 'react-toastify'

const DashboardHome = () => {
  const dispatch = useDispatch()

  const ReportData = useSelector((state)=>state.Anona.ReportData)

  const [date, setDate] = useState('')

  const OnSearch =()=>{
    if(date){
      dispatch(GetMealsReport(date))
    }else{
      toast.warning("Please Select A Date!", {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  }
  
  console.log('ReportData',ReportData);

  return (
    <div>
        <div className="breadcrumb">
          <span>
              <Link to='/'><span class="material-icons-outlined">summarize</span>Reports</Link>/
              <Link to='/'><span class="material-icons-outlined">home</span>Home</Link>
          </span>
        </div>
        <div className="Header">
          <h2><span class="material-icons-outlined">summarize</span>Production Reports</h2>
          <div className='INPUTS'>
            <input value={date} onChange={(e)=>setDate(e.target.value)} className='DateInput' type="date" />
            <button onClick={OnSearch}><span class="material-icons-outlined">search</span></button>
          </div>
        </div>

     
        <div className="productionReport">
         {ReportData&&ReportData!==undefined?<div>
         <table>
              <thead>
                <tr>
                  <th>Meal Name</th>
                  <th>Order ID</th>
                  <th>Dislikes</th>
                  <th>Allergy</th>
                  <th>Allergy Ingredients</th>
                  <th>Dislikes Count</th>
                  <th>Dislikes Total</th>
                  <th>Allergy Total</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {ReportData.data.map((data,index)=>(
                    <>
                        {data.dislikes.length>0?data.dislikes.map((subData,i)=>(
                        
                          <tr>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {data.name}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.order}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.name}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.allergy!==undefined?subData.allergy.map(allergy=>(<>{allergy}, </>)):null}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.allergy_ingredients!==undefined?subData.allergy_ingredients.map(allergyIng=>(<>{allergyIng}, </>)):null}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.dislikes_count}
                            </td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}></td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}></td>
                            <td style={i==data.dislikes.length-1?{borderBottom:'2px solid #000'}:null}>
                              {subData.quantity}
                            </td>
                          </tr>
                         
                        )):
                        // <tr>
                        //     <td style={{borderBottom:'2px solid #000'}}>{data.name}</td>
                        //     <td style={{borderBottom:'2px solid #000'}}>{data.normal.map(normal=>(<>{normal}, </>))}</td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}></td>
                        //     <td style={{borderBottom:'2px solid #000'}}>{data.count}</td>
                        //   </tr>
                        null
                          }
                    </>
                ))}

                <tr>
                  <td colSpan={8}>
                   <b> TOTAL WITH NOTES AND ALLERGIES</b>
                  </td>
                  <td><b>{ReportData.total_dislike_allergies}</b></td>
                </tr>

                <tr>
                  <td colSpan={8}>
                  <b> TOTAL NORMAL</b>
                  </td>
                  <td>
                  <b>{ReportData.normal}</b>
                  </td>
                </tr>
                

                <tr>
                  <td colSpan={8}>
                    <b>TOTAL ITEMS</b>
                  </td>
                  <td>
                  <b>{ReportData.count}</b>
                  </td>
                </tr>

              </tbody>
          </table>
         </div>:<h3>Please Select A Date!</h3>}
        </div>
       
    </div>
    )
}

export default DashboardHome