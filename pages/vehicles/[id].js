import Image from 'next/image';
import Heading from '../../components/Heading'; 
import Showcase from '../../components/Showcase';
import Layout from "../../components/Layout";
import {getVehicleBySlug, getAllVehicleSlugs} from '../../lib/api';


export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
      const {slug} = vehicle.node;
      return {
        params: {
          id:slug
        }
      }
    })
    return {
      paths,
      fallback:  false
    }
  }
  
  export async function getStaticProps ({params}) {
    const vehicleData = await getVehicleBySlug(params.id);
    return {
      props :{
        vehicleData
      }
    }
  }
  
const SingleVehiclePage = ({vehicleData}) => {
    const {title, slug, featuredImage, vehicleInformation } = vehicleData;
    const { headline } = vehicleInformation.showcase;
    return <Layout>
      <Showcase 
        subtitle={title}
        title={headline}
        featuredImage={featuredImage}
      />

      <div id='main-content'>
            Main content will go here


      </div>
        
  
    </Layout>
}
export default SingleVehiclePage;
