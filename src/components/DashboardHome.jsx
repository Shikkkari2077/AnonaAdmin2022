import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {GetMealsReport} from '../actions/HomeActions'
import { toast } from 'react-toastify'

const DashboardHome = () => {
  const dispatch = useDispatch()

  const ReportData = useSelector((state)=>state.Anona.ReportData)

  const [date, setDate] = useState('')

  useEffect(() => {
    if(date){
      dispatch(GetMealsReport(date))
    }
  }, [date])
  
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
          <input value={date} onChange={(e)=>setDate(e.target.value)} className='DateInput' type="date" />
        </div>

        <div className="productionReport">
         <div>
         <table>
              <thead>
                <tr>
                  <th>Meal Name</th>
                  <th>Order ID</th>
                  <th>Dislikes</th>
                  <th>Allergy</th>
                  <th>Ingredients</th>
                  <th>Dislikes Count</th>
                  <th>Dislikes Total</th>
                  <th>Allergy Total</th>
                  <th>Order Total</th>
                </tr>
              </thead>
              <tbody>
                {ReportData?ReportData.map((data,index)=>(
                    <tr>
                    <td>{data.name}</td>
                    <td>
                      <div>
                        {data.order.map(ordr=>(
                          <span>{ordr},</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div>
                        {data.dislikes.map(dislike=>(
                          <span>{dislike.name},</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div>
                        {data.allergic_to.map(allergy=>(
                          <span>{allergy.allergy[0]},</span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div>
                        {data.ingredients.map(ingredient=>(
                          <span>{ingredient},</span>
                        ))}
                      </div>
                    </td>
                    <td>{data.dislikes.length}</td>
                    <td></td>
                    <td></td>
                    <td>{data.order.length}</td>
                    </tr>
                )):null}

                <tr>
                  <td colSpan={8}>
                   <b> TOTAL WITH NOTES AND ALLERGIES</b>
                  </td>
                  <td><b>54</b></td>
                </tr>

                <tr>
                  <td colSpan={8}>
                  <b> TOTAL NORMAL</b>
                  </td>
                  <td>
                  <b>45</b>
                  </td>
                </tr>
                

                <tr>
                  <td colSpan={8}>
                    <b>TOTAL ITEMS</b>
                  </td>
                  <td>
                  <b>89</b>
                  </td>
                </tr>

              </tbody>
          </table>
         </div>
        </div>
       
    </div>
    )
}

export default DashboardHome