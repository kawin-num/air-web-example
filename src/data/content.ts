import type { SpaceExperience } from '../types/space'
import { publicAsset } from '../utils/publicAsset'

export const heroStories = [
  {
    eyebrow: 'AI-Led Enterprise Digital Transformation',
    title: 'AI-Led Enterprise Digital Transformation',
    description:
      'บลูบิคเป็นพาร์ตเนอร์ที่ปรึกษาชั้นนำด้านดิจิทัลทรานส์ฟอร์เมชันแบบครบวงจร และการประยุกต์ใช้ AI ระดับองค์กร',
    cta: 'อ่านเพิ่มเติม',
    image: publicAsset('bluebik/hero/Homepage-Herobanner-CEO-Survey.jpg'),
  },
  {
    eyebrow: 'Thailand’s AI-Driven Leadership Report',
    title: 'Thailand’s AI-Driven Leadership Report',
    description:
      'Bluebik Group ร่วมกับ THE STANDARD และ Sauce Skills เผยแพร่รายงานเชิงลึกจากการถอดบทเรียนผู้บริหารระดับสูงกว่า 100 องค์กรไทย',
    cta: 'อ่านรายงาน',
    image: publicAsset('bluebik/hero/Website-Banner-1600x900px-1.jpg'),
  },
  {
    eyebrow: 'Ambition to Excellence',
    title: 'Ambition to Excellence',
    description:
      'บลูบิคเป็นที่ปรึกษาด้านกลยุทธ์และการจัดการด้วยนวัตกรรมและเทคโนโลยีระดับโลก และผู้ให้บริการด้านดิจิทัลทรานส์ฟอร์เมชันแบบครบวงจร',
    cta: 'อ่านเพิ่มเติม',
    image: publicAsset('bluebik/hero/footer-banner.jpg'),
  },
]

export const experienceHighlights = [
  {
    label: '01',
    title: 'Ambition to Excellence',
    description:
      'ที่ปรึกษาด้านกลยุทธ์และการจัดการด้วยนวัตกรรมและเทคโนโลยีระดับโลก สำหรับองค์กรที่ต้องการผลลัพธ์จริง',
  },
  {
    label: '02',
    title: 'AI-Led Integrated Services',
    description:
      'ผสานกลยุทธ์ ข้อมูล AI ประสบการณ์ดิจิทัล และ cybersecurity เพื่อสร้างการเปลี่ยนผ่านระดับองค์กร',
  },
  {
    label: '03',
    title: 'Consulting for the Next Digital Era',
    description:
      'ช่วยองค์กรยกระดับประสิทธิภาพ เพิ่มความคล่องตัว และสร้างความได้เปรียบในการแข่งขันอย่างยั่งยืน',
  },
]

export const fallbackSpaces: SpaceExperience[] = [
  {
    id: 'management-consulting',
    title: 'Management Consulting',
    category: 'Strategy & Transformation',
    summary:
      'ให้คำแนะนำตั้งแต่การกำหนดทิศทางเชิงกลยุทธ์ การบริหารทรัพยากร และการติดตามความคืบหน้าของโครงการผ่านเครื่องมือดิจิทัล',
    result: 'Business strategy to execution',
    asset: publicAsset('bluebik/services/01-MC_Des.jpg'),
    accent: 'blue',
  },
  {
    id: 'big-data-ai',
    title: 'Big Data & Artificial Intelligence',
    category: 'Data & AI',
    summary:
      'ให้คำปรึกษาด้านกลยุทธ์และการจัดการข้อมูลขนาดใหญ่ รวมถึงปัญญาประดิษฐ์ เพื่อช่วยให้ธุรกิจใช้ข้อมูลให้เกิดประโยชน์สูงสุด',
    result: 'Enterprise data advantage',
    asset: publicAsset('bluebik/services/03-AI_Des.jpg'),
    accent: 'pearl',
  },
  {
    id: 'digital-excellence',
    title: 'Digital Excellence & Delivery',
    category: 'Digital Transformation',
    summary:
      'ครอบคลุมการนำเทคโนโลยีเข้ามาปรับปรุงกระบวนการทำงาน เพิ่มประสิทธิภาพ และเสริมศักยภาพในการแข่งขัน',
    result: 'Digital delivery at scale',
    asset: publicAsset('bluebik/services/02-DX_Des.jpg'),
    accent: 'slate',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Digital Trust',
    category: 'Cybersecurity',
    summary:
      'ช่วยองค์กรวางมาตรการป้องกันภัยคุกคามทางไซเบอร์ ลดความเสี่ยง และสร้างระบบความปลอดภัยที่มั่นคง',
    result: 'Trusted digital operations',
    asset: publicAsset('bluebik/services/04-TITANS_Des.jpg'),
    accent: 'blue',
  },
  {
    id: 'sap-erp',
    title: 'SAP ERP Advisory & Implementation',
    category: 'Enterprise Systems',
    summary:
      'สร้างสรรค์นวัตกรรมด้วยระบบ ERP ที่ช่วยจัดการทรัพยากรองค์กรอย่างเป็นระบบ พร้อมเสริมศักยภาพด้วย SAP',
    result: 'Enterprise resource clarity',
    asset: publicAsset('bluebik/services/05-SAP_Des.jpg'),
    accent: 'pearl',
  },
  {
    id: 'experience-design',
    title: 'Experience Design',
    category: 'Human-Centric Design',
    summary:
      'ออกแบบประสบการณ์ที่ขับเคลื่อนธุรกิจ โดยมีมนุษย์เป็นศูนย์กลาง ผสานความคิดสร้างสรรค์เข้ากับเทคโนโลยี',
    result: 'Products people love',
    asset: publicAsset('bluebik/services/06-XD_Des.jpg'),
    accent: 'slate',
  },
]

export const serviceHighlights = [
  {
    id: 'strategic-pmo',
    label: 'Strategic PMO',
    title: 'ออกแบบแนวทางบริหารโครงการที่ตอบสนองต่อการเปลี่ยนแปลงได้เร็ว',
    description:
      'เพิ่มความโปร่งใส ลดความซับซ้อน และเพิ่มประสิทธิภาพในการตัดสินใจ เพื่อขับเคลื่อนโครงการให้สำเร็จอย่างยั่งยืน',
    asset: publicAsset('bluebik/services/07-PMO_Des.jpg'),
  },
  {
    id: 'dynamics-365',
    label: 'Dynamics 365 Finance and Supply Chain Implementation',
    title: 'บริหารการเงินและซัพพลายเชนด้วย ERP อัจฉริยะ',
    description:
      'ช่วยเพิ่มความคล่องตัว ลดต้นทุน และเพิ่มประสิทธิภาพการดำเนินงานด้วย Dynamics 365 Finance & Supply Chain Management',
    asset: publicAsset('bluebik/services/05-SAP_Des.jpg'),
  },
  {
    id: 'digital-trust',
    label: 'Cybersecurity & Digital Trust',
    title: 'สร้างความเชื่อมั่นให้ระบบดิจิทัลตั้งแต่กลยุทธ์ถึงการปฏิบัติ',
    description:
      'วางโครงสร้างความปลอดภัยที่มั่นคง ลดความเสี่ยงทางไซเบอร์ และสร้าง digital trust สำหรับการเติบโต',
    asset: publicAsset('bluebik/services/04-TITANS_Des.jpg'),
  },
]

export const buildingMetrics = [
  { value: '100+', label: 'องค์กรชั้นนำที่ถูกถอดบทเรียนใน AI-Driven Leadership Report' },
  {
    value: '8',
    label: 'กลุ่มบริการหลักตั้งแต่ strategy, data, AI, ERP ถึง cybersecurity',
  },
  { value: '20%', label: 'เป้าหมายการเติบโตที่สื่อสารใน newsroom สำหรับปีธุรกิจล่าสุด' },
  {
    value: '360°',
    label: 'มุมมองการเปลี่ยนผ่านธุรกิจครบวงจรตั้งแต่กลยุทธ์ถึง execution',
  },
]

export const infrastructureItems = [
  'Digital Transformation และ Enterprise Transformation',
  'AI-Led Integrated Services, Big Data และ AI',
  'Cybersecurity, Supply Chain Management และ ERP advisory',
  'Strategic Project Management Office เพื่อผลักดันโครงการระดับองค์กร',
]

export const planHighlights = [
  {
    id: 'strategy',
    label: 'Strategy',
    title: 'Ambition to Excellence',
    description:
      'เริ่มจากโจทย์ธุรกิจและกลยุทธ์ที่ชัดเจน ก่อนออกแบบ roadmap การเปลี่ยนผ่านที่วัดผลได้',
    position: 'left-[29%] top-[31%]',
  },
  {
    id: 'data-ai',
    label: 'Data & AI',
    title: 'AI-Led Enterprise',
    description:
      'ยกระดับข้อมูลและ AI ให้เชื่อมกับ use case จริง เพื่อสร้างความเร็ว ความแม่นยำ และ business impact',
    position: 'left-[52%] top-[56%]',
  },
  {
    id: 'delivery',
    label: 'Delivery',
    title: 'Transform Together',
    description:
      'ผสาน delivery excellence, PMO, cybersecurity และ enterprise platforms เพื่อทำให้ transformation เกิดขึ้นจริง',
    position: 'left-[70%] top-[24%]',
  },
]

export const locationNodes = [
  'ธนาคารและการเงิน',
  'ประกันภัยและค้าปลีก',
  'อุตสาหกรรมการผลิตและพลังงาน',
  'บริการสุขภาพและภาครัฐ',
]

export const insights = [
  {
    category: 'Artificial Intelligence',
    title: '‘AI ทำเกินหน้าที่’ ภัยเงียบที่กำลังสั่นคลอนความมั่นคงปลอดภัยไซเบอร์องค์กร',
    date: '28 พฤษภาคม 2569',
    image: publicAsset('bluebik/insights/Thumbnail-Zero-Trust-AI-Access-1.png'),
  },
  {
    category: 'Business & Technology',
    title:
      'เมื่อ Workflow กลายเป็นต้นทุนแฝงขององค์กร ปลดล็อกการทำงานให้เร็ว โปร่งใส ด้วย K2',
    date: '14 พฤษภาคม 2569',
    image: publicAsset('bluebik/insights/2026-03-30_Info-K2_Thumnail.jpg'),
  },
  {
    category: 'Artificial Intelligence',
    title:
      'ชัยชนะบนสมรภูมิการให้บริการยุค AI-First ต้องเริ่มด้วย AI-Enhanced Customer Service',
    date: '6 พฤษภาคม 2569',
    image: publicAsset('bluebik/insights/Thumbnail-AI-Enhanced-Customer-Service.png'),
  },
  {
    category: 'Artificial Intelligence',
    title: 'ปฏิรูปสถาปัตยกรรมแห่งอนาคต ‘AI Workflow Orchestration’ ทลายปัญหา Siloed AI',
    date: '3 เมษายน 2569',
    image: publicAsset('bluebik/insights/Thumbnail-AI-Orchestration.jpg'),
  },
  {
    category: 'Artificial Intelligence',
    title: 'Agentic AI: ถึงเวลาที่องค์กรต้องเปลี่ยนจาก “การทดลอง” สู่ “การสร้างผลลัพธ์”',
    date: '24 มีนาคม 2569',
    image: publicAsset('bluebik/insights/Agentic_AI_Thumnail.jpg'),
  },
]

export const newsroom = [
  {
    title:
      'บลูบิค แนะเฟรมเวิร์ก 5 ขั้นตอนทำ Cloud Migration ให้สำเร็จ เพื่อต่อยอดเทคโนโลยีและแข่งขันได้อย่างยั่งยืน',
    date: '8 มิถุนายน 2569',
    image: publicAsset('bluebik/news/Press-Release-AI-Transformation_Thumbnail.jpg'),
  },
  {
    title:
      'บลูบิค Q1/69 โตแกร่งกวาดรายได้ 371 ลบ. กำไร 81 ลบ. มั่นใจผลประกอบการทั้งปีโตตามเป้า 20%',
    date: '13 พฤษภาคม 2569',
    image: publicAsset('bluebik/news/News003-Thumbnail.jpg'),
  },
  {
    title:
      'บลูบิค ตอกย้ำภาพ AI-Driven Organization ระดับสากลเข้า Finalist เวที LinkedIn Talent Awards 2025',
    date: '30 เมษายน 2569',
    image: publicAsset('bluebik/news/Thumbnail-AGM.jpg'),
  },
]

export const clientVoices = [
  {
    name: 'คุณบุษยา ยินดีสุข',
    role: 'Chief Digital Transformation Officer, Big C Supercenter',
    quote:
      'ทีมงานของบลูบิคสามารถเรียนรู้และทำความเข้าใจได้อย่างรวดเร็ว ที่สำคัญยังต่อยอดไปถึงวิธีการแก้ไขปัญหาและให้คำแนะนำแบบ Best Practice',
    image: publicAsset('bluebik/clients/Clients-Quote_bigc.png'),
    logo: publicAsset('bluebik/logos/BC-LOGO1.png'),
  },
  {
    name: 'คุณสุภา จินคำพะเนา',
    role: 'Head of Transformation Program Management Office, Central Retail Digital',
    quote:
      'บลูบิคมีชุดทักษะที่จะช่วยให้โปรเจกต์ประสบความสำเร็จ ทีมงานมีองค์ความรู้เชิงลึกและเข้าใจรายละเอียดของธุรกิจ e-Commerce เป็นอย่างดี',
    image: publicAsset('bluebik/clients/Clients-Quote_central-tech.png'),
    logo: publicAsset('bluebik/logos/Central-tech-Logo1.png'),
  },
  {
    name: 'คุณอนุพงศ์ คุตติกุล',
    role: 'CEO & Co-Founder, Carnival Supply',
    quote:
      'โซลูชันที่บลูบิค ไททันส์นำเสนอนั้นถูกต้อง เห็นผลจริง และตรงกับสิ่งที่คาร์นิวาลมองหา',
    image: publicAsset('bluebik/clients/Clients-Quote_carnival.png'),
    logo: publicAsset('bluebik/logos/Carnival-Logo2.png'),
  },
  {
    name: 'คุณวีรภัทร จันทรวรรณกูล',
    role: 'Chief Technology Officer, InnovestX',
    quote:
      'สิ่งที่ประทับใจคือเรื่อง Commitment ทีมงานบลูบิคมุ่งมั่นที่จะทำให้สำเร็จตามเป้าหมายเพื่อส่งมอบผลลัพธ์ที่ดีที่สุด',
    image: publicAsset('bluebik/clients/Clients-Quote_innovestx.jpg'),
    logo: publicAsset('bluebik/logos/InnovestX-Logo1.png'),
  },
]

export const clientLogos = [
  { name: 'Big C', asset: publicAsset('bluebik/logos/BC-LOGO1.png') },
  { name: 'Central Tech', asset: publicAsset('bluebik/logos/Central-tech-Logo1.png') },
  { name: 'Carnival', asset: publicAsset('bluebik/logos/Carnival-Logo2.png') },
  { name: 'InnovestX', asset: publicAsset('bluebik/logos/InnovestX-Logo1.png') },
  {
    name: 'Muang Thai Life Assurance',
    asset: publicAsset('bluebik/logos/MTL-LOGO1.png'),
  },
  { name: 'PTT OR', asset: publicAsset('bluebik/logos/OR-LOGO1.png') },
]

export const careerCta = {
  eyebrow: 'JOIN THE TEAM THAT DOES THINGS DIFFERENTLY.',
  title: 'เพราะคนคือหัวใจสำคัญ เราจึงมุ่งสร้างและดูแลความสัมพันธ์ที่ดี',
  description: 'ทั้งกับลูกค้าและกับเพื่อนร่วมงาน',
  cta: 'ร่วมงานกับเรา',
  image: publicAsset('bluebik/career/Career-HeroBanner-01.jpg'),
}
