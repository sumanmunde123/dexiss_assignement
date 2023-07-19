// import { useEffect } from 'react'
import './Home.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import TelegramIcon from '@mui/icons-material/Telegram';
import DescriptionIcon from '@mui/icons-material/Description';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Link } from 'react-router-dom';

const Documents = () => {
  return (
    <div>
        <h4 className='Home'>Document</h4>
        <div className="HomePage">
            <div className="sidebar">  
           <div className="icon">
           <AccountCircleRoundedIcon className='iconi' fontSize="small" ></AccountCircleRoundedIcon>
            <select className='select'>
                <option>Suman Munde</option>
            </select>
           </div>

           <div className="icon">
           <DashboardIcon className='iconi' fontSize="small" ></DashboardIcon>
           <Link to='/'> <div className='names'>Dashboard</div></Link>
           </div>

           <div className="icon">
           <AllInboxIcon className='iconi' fontSize="small" ></AllInboxIcon>
            <div className='names'>Inbox</div>
           </div>

           <div className="icon">
           <TelegramIcon className='iconi' fontSize="small" ></TelegramIcon>
            <div className='names'>Sent</div>
           </div>

           <div className="icon">
           <DescriptionIcon className='iconi' fontSize="small" ></DescriptionIcon>
           <Link to='/document'><div className='names'>Documents</div></Link>
           </div>

           <div className="icon">
           <FileCopyIcon className='iconi' fontSize="small" ></FileCopyIcon>
           <Link to='/template'><div className='names'>Templates</div></Link>
           </div>


           <div className="icon2">
           <DesignServicesIcon className='iconi' fontSize="small" ></DesignServicesIcon>
            <div className='names'>Signature</div>
           </div>
            </div>


            <div className="dashboard">
                <div className='inside_i'>
                    <h2 className='dashhead'>Documents</h2>
                    <div className="icond">
           <AddIcon className='iconi' fontSize="small" ></AddIcon>
           <Link to='/templateform'><div className='namest'>New Document</div></Link>
           </div>
                </div>


                <div  className='inside_ii'>
   

           <div className="insidedi">
           <div className="icondii_t">
           <FilterListIcon className='iconi' fontSize="small" ></FilterListIcon>
            <div className='names'>Filters</div>
           </div>

           <div className="icondii_t">
           <ImportExportIcon className='iconi' fontSize="small" ></ImportExportIcon>
            <div className='names'>Filters</div>
           </div>



           </div>
                </div>
            </div>




            {/* flexboxes */}
         <div className="filebox">
            <div className="box_t">
               
            </div>


            <div className="box_t">
              
            </div>


            <div className="box_t">
                
            </div>
           <div className="send_btn">
           <button className='btni_i'>Send</button>
            <button className='btni'>Send</button>
            <button className='btni'>Send</button>

           </div>
           

          
           
            </div>      
        </div>
    </div>
  )
}

export default Documents;