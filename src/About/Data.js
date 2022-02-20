import ReactIcon from '../Components/Icons/React'
import NextIcon from '../Components/Icons/Next'
import HTMLIcon from '../Components/Icons/HTML'
import CSSIcon from '../Components/Icons/CSS'
import JavascriptIcon from '../Components/Icons/Javascript'
import BootstrapIcon from '../Components/Icons/Bootstrap'
import FlutterIcon from '../Components/Icons/Flutter'
import GitIcon from '../Components/Icons/Git'
import GitHubIcon from '../Components/Icons/GitHub'

// icon, name, isNew, comment


//crear funcion que le pase el color al icon dependiendo del estado dark or light

export const technologiesData = [{
    id: 0,
    icon: < ReactIcon width="5rem" />,
    name: 'React.js',
    isNew: true,
    comment: 'Learning'
},
{
    id: 1,
    icon: < NextIcon width="5rem" />,
    name: 'Next.js',
    isNew: true,
    comment: 'Learning'
},
{
    id: 2,
    icon: < HTMLIcon width="5rem" />,
    name: 'HTML',
    isNew: false,
    comment: 'Learned'
},
{
    id: 3,
    icon: < CSSIcon width="5rem" />,
    name: 'CSS',
    isNew: false,
    comment: 'Learned'
},
{
    id: 4,
    icon: < JavascriptIcon width="5rem" />,
    name: 'Javascript',
    isNew: false,
    comment: 'Learned'
},
{
    id: 5,
    icon: < BootstrapIcon width="5rem" />,
    name: 'Bootstrap',
    isNew: false,
    comment: 'Learned'
},
{
    id: 6,
    icon: < FlutterIcon width="5rem" />,
    name: 'Flutter',
    isNew: false,
    comment: 'Learned'
},
{
    id: 7,
    icon: < GitIcon width="5rem" />,
    name: 'Git',
    isNew: false,
    comment: 'Learned'
},
{
    id: 8,
    icon: < GitHubIcon width="5rem" />,
    name: 'Git',
    isNew: false,
    comment: 'Learned'
}
]