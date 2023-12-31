import Image from 'next/image';
import Link from 'next/link';
import styles from './grid.module.scss';
import { motion } from "framer-motion";
import Heading from './Heading';
import Paragraph from './Paragraph';

 
const convertPriceToFormattedString = (price) => {
        let priceArray = price.toString().split('');
        for (let i = priceArray.length - 3; i > 0; i -= 3) {
            priceArray.splice(i, 0, ',');
        }

        return '$' + priceArray.join('');
}

const Grid = ({items}) => {
    const sectionVariants = {
        closed: {
            opacity: 0
        },
        open: {
        opacity: 1,
        transition:  {
            staggerChildren: 0.2
        }
          
        }
    }
    const articleVariants = {
        closed: {
            y:50,
            opacity: 0
        },

        open: {
            y: 0,
            opacity:1
 
        }


    }
    return <motion.section 
    initial="closed"
    animate="open"
    variants={sectionVariants}

    className={styles.grid}>
        {items.map((item, index) => {
                    const { title, slug, vehicleInformation } = item.node;
                    const { trimLevels } = vehicleInformation;
                    return <motion.article
                    key={index}
                    variants={articleVariants}
                    className={styles.grid__item}  
                    >
                        {trimLevels && trimLevels[0].images.thumbnail && 
                            <Image 
                                src={trimLevels[0].images.thumbnail.node.sourceUrl}
                                alt={trimLevels[0].images.thumbnail.node.altText}
                                width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                                height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                            />
                        }   
                        <Heading 
                            level={3} 
                            color="black"
                        
                        >
                            {title}</Heading>

                        <Paragraph> 
                            Starting at ${convertPriceToFormattedString(StringtrimLevels[0].msrp)}
                        </Paragraph>
                        {trimLevels[0].msrp &&
 
                        <Paragraph>
                            <Link href={`/vehicles/${slug}`}>Learn more</Link>
                        </Paragraph>
                    </motion.article> 
                })}
    </motion.section>
}
export default Grid;