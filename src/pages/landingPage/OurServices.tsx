import InfiniteMenu from '../../../reactBits/InfiniteMenu/InfiniteMenu';
import cerebro from "../../assets/icon/cerebro.png";
import UIUX from "../../assets/icon/UIUXICON.svg";
import nut from "../../assets/icon/nut.svg";
import stats from "../../assets/icon/stats.svg"

export default function Services() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>

  );
}

const items = [
  {
    image: UIUX,
    link: '../servicios.tsx',
    title: 'Diseño UI/UX',
    description: 'Creamos interfaces modernas, únicas y funcionales que mejoran la experiencia de usuario y refuerzan la identidad de tu marca.'
  },
  {
    image: stats,
    link: 'https://google.com/',
    title: 'Plan Estratégico Personalizado',
    description: 'Diseñamos estrategias tecnológicas a medida, alineadas con los objetivos de tu empresa para maximizar su potencial.'
  },
  {
    image: nut,
    link: 'https://google.com/',
    title: 'Implementaciones Tecnológicas',
    description: 'Desarrollamos soluciones digitales personalizadas para optimizar tus procesos y modernizar tu negocio.'
  },
  {
    image: cerebro,
    link: 'https://google.com/',
    title: 'Automatización con Inteligencia Artificial',
    description: 'Integramos IA para optimizar procesos, reducir costos y tomar decisiones más inteligentes en tiempo real.'
  }
];





