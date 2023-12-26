import Image from 'next/image';
import Heading from '../../components/Heading'; 
import Showcase from '../../components/Showcase';
import Layout from "../../components/Layout";
import {getVehicleBySlug, getAllVehicleSlugs} from '../../lib/api';
import TrimPicker from '../../components/TrimPicker';
import Container from '../../components/Container';
import {getDrivingLocations} from '../../lib/locations';
import ColorPicker from '../../components/ColorPicker';

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
    const drivingLocations = getDrivingLocations();
    return {
      props :{
        vehicleData,
        drivingLocations
      }
    }
  }
  
const SingleVehiclePage = ({vehicleData, drivingLocations}) => {
    const {title, slug, featuredImage, vehicleInformation } = vehicleData;
    const { headline } = vehicleInformation.showcase;
    const {trimLevels, vehicleColors} = vehicleInformation;
    return <Layout>
      <Showcase 
        subtitle={title}
        title={headline}
        featuredImage={featuredImage}
      />

      <div id='main-content'>
        <Container>
            <TrimPicker 
            trims={trimLevels} 
            locations={drivingLocations}  />
            <ColorPicker 
            colors={vehicleColors}
            
            />
        </Container>


      </div> 
        
    </Layout>
}
export default SingleVehiclePage;
