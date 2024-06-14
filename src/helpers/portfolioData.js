//import ptmHome from '../images/portfolioSection/myPTM-Home.gif';
import ptmDocuments from '../images/portfolioSection/myPTM-Documents.gif';
import ptmProperties from '../images/portfolioSection/myPTM-Properties.gif';
import ptmDetails from '../images/portfolioSection/myPTM-Details.gif';
import ptmConceptMenu from '../images/portfolioSection/myPTM-ConceptMenu.gif';

const portfolioData = [
    /*{
        image: ptmHome,
        //link: 'http://my-ptm.s3-website-us-east-1.amazonaws.com/',
        link: '',
        desc: 'Serverless Single Page Applilcation',
        summary: 'A database application, which retreives data from Oracle database and displays data in various formats.',
        tech: 'Angular, AWS Lambda, AWS API Gateways, Oracl',

    },*/
    {
        image: ptmDocuments,
        link: '',
        desc: 'Documents screen',
        summary: 'Displaying documents in a grid and then by selecting one documnt, the next screen will be generated to show the details of the selected document.',
        tech: 'Angular, AWS Lambda, AWS API Gateways, AWS S3, AWS CloudFront, Oracle',

    },
    {
        image: ptmDetails,
        link: '',
        desc: 'Details screen',
        summary: 'A complex screen retreivnig financial information from database and displaying them using a tree structure in left side and a grid at right side of screen.',
        tech: 'Angular, AWS Lambda, AWS API Gateways, AWS S3, AWS CloudFront, Oracle',
    },    
    {
        image: ptmProperties,
        link: '',
        desc: 'Properties screen',
        summary: 'A modal screen listing financial information from a database.',
        tech: 'Angular, AWS Lambda, AWS API Gateways, AWS S3, AWS CloudFront, Oracle',
    },
    {
        image: ptmConceptMenu,
        link: '',
        desc: 'Concept menu',
        summary: 'Displaying a concept menu to take care of multiple tasks.',
        tech: 'Angular, AWS Lambda, AWS API Gateways, AWS S3, AWS CloudFront, Oracle.',
    },

]

export default portfolioData;