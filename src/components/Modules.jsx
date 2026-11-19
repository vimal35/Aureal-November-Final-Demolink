import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Heart,
  Brain,
  Users,
  Droplet,
  Shield,
  Eye,
  HeartHandshake,
  Bone,
  Waves,
  Scissors,
  Ear,
  MessagesSquare,
  Dumbbell,
  BrainCog,
  Baby,
  Flower2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Award,
  CheckCircle2,
  ArrowUpRight,
  Search,
  Sparkles,
  X,
  UserCheck,
  Zap,
  Filter,
  MessageCircle,
} from 'lucide-react';
import './Modules.css';

const AUTOPLAY_INTERVAL_DEFAULT = 4500; // ms per slide
const WHATSAPP_NUMBER = '919944969049';

const MODULES_DATA = [
  {
    id: '01',
    shortLabel: 'GERIATRICS',
    category: 'Geriatric & Elder Care',
    title: 'Geriatrics',
    description:
      'Whole-person care for older adults — combining medical, functional and cognitive assessment to preserve independence and quality of life.',
    image: '/modules1.jpg',
    icon: Users,
    badge: 'COMPREHENSIVE',
    stats: [
      { value: '60+', label: 'ELDER PATIENTS CARED FOR' },
      { value: '92%', label: 'FUNCTIONAL IMPROVEMENT' },
      { value: '30 mins', label: 'AVG. CONSULTATION TIME' },
    ],
    compliance: 'ANCHORED IN WHO ICOPE FRAMEWORK',
    accent: '#0B3D2E',
    goldBadge: 'ELDER CARE EXCELLENCE',
    overview:
      'Our Geriatric Care programme addresses the complex, overlapping needs of ageing — from chronic disease management to fall risk, frailty and cognitive decline — through a structured, function-first approach.',
    procedures: ['Comprehensive Geriatric Assessment', 'Frailty & Fall-Risk Screening', 'Polypharmacy Review', 'Dementia & Cognitive Care', 'Home-Based Elder Care Support'],
    specialists: [
      { name: 'Dr. Meera Krishnan', title: 'Lead Geriatrician', exp: '18+ Yrs Exp' },
      { name: 'Dr. Arjun Nair', title: 'Consultant, Elder Care', exp: '14+ Yrs Exp' },
    ],
  },
  {
    id: '02',
    shortLabel: 'CARDIOLOGY',
    category: 'Heart & Vascular Care',
    title: 'Cardiology',
    description:
      'Interventional cardiology, electrophysiology and preventive heart care unified under one roof, guided by international cardiac protocols.',
    image: '/modules2.jpg',
    icon: Heart,
    badge: 'PREMIUM',
    stats: [
      { value: '12k+', label: 'CARDIAC PROCEDURES' },
      { value: '99%', label: 'SUCCESS RATE' },
      { value: '30 mins', label: 'DOOR-TO-BALLOON TIME' },
    ],
    compliance: 'ALIGNED WITH ESC / ACC-AHA GUIDELINES',
    accent: '#14532D',
    goldBadge: 'TOP RATED CARDIAC INSTITUTE',
    overview:
      'Our Cardiology programme covers the full spectrum of heart care — diagnostics, non-surgical intervention and long-term rhythm and heart-failure management — for timely, evidence-based treatment.',
    procedures: ['Coronary Angioplasty & Stenting', 'Electrophysiology & Rhythm Disorders', 'Heart Failure Management', 'Preventive Cardiology & Risk Screening', 'Cardiac Rehabilitation'],
    specialists: [
      { name: 'Dr. Elizabeth Vance', title: 'Director of Interventional Cardiology', exp: '22+ Yrs Exp' },
      { name: 'Dr. Marcus Thorne', title: 'Chief Cardiothoracic Surgeon', exp: '19+ Yrs Exp' },
    ],
  },
  {
    id: '03',
    shortLabel: 'NEPHROLOGY',
    category: 'Kidney & Renal Care',
    title: 'Nephrology',
    description:
      'Comprehensive kidney care spanning early-stage CKD management to dialysis and transplant coordination, built around long-term renal health.',
    image: '/modules3.jpg',
    icon: Droplet,
    badge: 'SPECIALIST CARE',
    stats: [
      { value: '8k+', label: 'DIALYSIS SESSIONS' },
      { value: '85%', label: 'CKD PROGRESSION SLOWED' },
      { value: 'Weekly', label: 'FOLLOW-UP' },
    ],
    compliance: 'COMPLIANT WITH KDIGO GUIDELINES',
    accent: '#144a35',
    goldBadge: 'KIDNEY CARE EXCELLENCE',
    overview:
      'Our Nephrology programme manages the full continuum of kidney disease — from early detection and CKD staging to dialysis support and transplant coordination — with close monitoring at every stage.',
    procedures: ['CKD Staging & Management', 'Haemodialysis & Peritoneal Dialysis', 'Renal Transplant Coordination', 'Hypertension-Related Kidney Care', 'Electrolyte & Metabolic Management'],
    specialists: [
      { name: 'Dr. Anita Roy', title: 'Director of Nephrology', exp: '17+ Yrs Exp' },
      { name: 'Dr. Sameer Kulkarni', title: 'Consultant Nephrologist', exp: '13+ Yrs Exp' },
    ],
  },
  {
    id: '04',
    shortLabel: 'ONCOLOGY',
    category: 'Cancer & Haematology Care',
    title: 'Oncology',
    description:
      'Tumour-board-driven cancer care combining diagnosis, targeted therapy and radiation into a single, coordinated treatment blueprint per patient.',
    image: '/modules4.jpg',
    icon: Shield,
    badge: 'ADVANCED',
    stats: [
      { value: '3k+', label: 'CASES REVIEWED' },
      { value: '100%', label: 'PRECISION RADIATION COVERAGE' },
      { value: '48h', label: 'AVG. TIME-TO-TREATMENT' },
    ],
    compliance: 'GOVERNED BY NCCN & ESMO PATHWAYS',
    accent: '#065F46',
    goldBadge: 'PRECISION ONCOLOGY',
    overview:
      'Our Oncology & Haematology programme brings surgical, medical and radiation oncology together under a shared tumour board, ensuring every treatment plan reflects the latest evidence-based protocols.',
    procedures: ['Multidisciplinary Tumour Board Review', 'Chemotherapy & Targeted Therapy', 'Precision Radiation Therapy (IGRT)', 'Haemato-Oncology & Blood Disorders', 'Cancer Screening & Early Detection'],
    specialists: [
      { name: 'Dr. Vikram Sethi', title: 'Director of Medical Oncology', exp: '20+ Yrs Exp' },
      { name: 'Dr. Helen Vance', title: 'Chief Surgical Oncologist', exp: '18+ Yrs Exp' },
    ],
  },
  {
    id: '05',
    shortLabel: 'NEUROLOGY',
    category: 'Brain, Spine & Nerve Care',
    title: 'Neurology',
    description:
      'A dedicated neuro-critical pathway combining neurology, neurosurgery and neuro-rehabilitation, powered by advanced imaging and navigation.',
    image: '/modules5.jpg',
    icon: Brain,
    badge: 'ADVANCED',
    stats: [
      { value: '24×7', label: 'STROKE UNIT' },
      { value: '3h', label: 'THROMBOLYSIS WINDOW' },
      { value: '3T', label: 'MRI NAVIGATION' },
    ],
    compliance: 'ANCHORED IN AAN & NICE PROTOCOLS',
    accent: '#133226',
    goldBadge: 'STROKE CENTER OF EXCELLENCE',
    overview:
      'Our Neurosciences programme features rapid stroke response, management of movement disorders, and comprehensive neuro-rehabilitation — built for time-critical and long-term neurological care alike.',
    procedures: ['Acute Stroke Management', 'Epilepsy & Seizure Disorders', "Movement Disorder Care (Parkinson's, etc.)", 'Spinal & Nerve Disorders', 'Neuro-Rehabilitation'],
    specialists: [
      { name: 'Dr. Aris Thorne', title: 'Head of Neurosurgery', exp: '24+ Yrs Exp' },
      { name: 'Dr. Maya Lin', title: 'Lead Stroke Neurologist', exp: '16+ Yrs Exp' },
    ],
  },
  {
    id: '06',
    shortLabel: 'OPHTHALMOLOGY',
    category: 'Eye Care',
    title: 'Ophthalmology',
    description:
      'Complete eye care from routine vision correction to advanced surgical intervention, delivered with precision diagnostic imaging.',
    image: '/modules6.jpg',
    icon: Eye,
    badge: 'PRECISION',
    stats: [
      { value: '5k+', label: 'EYE SURGERIES' },
      { value: '98%', label: 'VISUAL RECOVERY' },
      { value: '2k+', label: 'CATARACT SURGERIES' },
    ],
    compliance: 'ALIGNED WITH AAO GUIDELINES',
    accent: '#133b2c',
    goldBadge: 'ADVANCED EYE CARE CENTER',
    overview:
      'Our Eye Care programme spans the full range of ophthalmic need — refractive, medical and surgical — supported by detailed retinal and anterior-segment imaging for accurate diagnosis.',
    procedures: ['Cataract Surgery (Phaco/IOL)', 'Retina & Vitreo-Retinal Care', 'Glaucoma Management', 'Corneal & Refractive Surgery', 'Paediatric Ophthalmology'],
    specialists: [
      { name: 'Dr. Kavitha Rao', title: 'Lead Ophthalmologist', exp: '15+ Yrs Exp' },
      { name: 'Dr. Nikhil Verma', title: 'Consultant, Retina & Vitreo-Retinal Care', exp: '12+ Yrs Exp' },
    ],
  },
  {
    id: '07',
    shortLabel: 'PALLIATIVE',
    category: 'Palliative & Supportive Care',
    title: 'Palliative Medicine',
    description:
      'Comfort-focused, dignity-centred care for patients with serious illness — managing symptoms and supporting families through every stage.',
    image: '/modules7.jpg',
    icon: HeartHandshake,
    badge: 'DEDICATED',
    stats: [
      { value: '100+', label: 'FAMILIES SUPPORTED' },
      { value: '99%', label: 'SYMPTOM CONTROL' },
      { value: '24×7', label: 'HOME CARE AVAILABILITY' },
    ],
    compliance: 'ANCHORED IN PALLIUM INDIA PROTOCOLS',
    accent: '#166534',
    goldBadge: 'COMPASSIONATE CARE PROGRAMME',
    overview:
      'Our Palliative Care programme prioritises quality of life for patients with life-limiting illness, combining pain and symptom management with psychosocial and family support, at home or in-facility.',
    procedures: ['Pain & Symptom Management', 'Home-Based Palliative Care', 'Psychosocial & Family Counselling', 'End-of-Life Care Planning', 'Bereavement Support'],
    specialists: [
      { name: 'Dr. Sunita George', title: 'Head of Palliative Care', exp: '16+ Yrs Exp' },
      { name: 'Dr. Thomas Mathew', title: 'Consultant, Supportive Care', exp: '11+ Yrs Exp' },
    ],
  },
  {
    id: '08',
    shortLabel: 'ORTHOPAEDICS',
    category: 'Bone, Joint & Sports Medicine',
    title: 'Orthopaedics',
    description:
      'Robotic-assisted arthroplasty, arthroscopic sports surgery and structured physiotherapy engineered around a measurable return to motion.',
    image: '/modules8.jpg',
    icon: Bone,
    badge: 'ROBOTIC',
    stats: [
      { value: '9k+', label: 'JOINT REPLACEMENTS' },
      { value: '24h', label: 'AVG. WALK-AFTER-SURGERY' },
      { value: '1.5k+', label: 'ROBOTIC-ASSISTED SURGERIES' },
    ],
    compliance: 'BENCHMARKED TO AAOS CLINICAL STANDARDS',
    accent: '#1E4B3A',
    goldBadge: 'ROBOTIC SURGERY HUB',
    overview:
      'Our Orthopaedics & Joint Replacement programme covers joint preservation through replacement, with robotic-assisted precision and a structured rehabilitation pathway for faster, safer recovery.',
    procedures: ['Robotic-Assisted Knee & Hip Replacement', 'Arthroscopic Sports Injury Repair', 'Spine & Trauma Surgery', 'Paediatric Orthopaedics', 'Post-Surgical Physiotherapy'],
    specialists: [
      { name: 'Dr. Robert Sterling', title: 'Chair of Orthopaedic Surgery', exp: '21+ Yrs Exp' },
      { name: 'Dr. Sarah Jenkins', title: 'Sports Medicine Consultant', exp: '14+ Yrs Exp' },
    ],
  },
  {
    id: '09',
    shortLabel: 'UROLOGY',
    category: 'Urology & Kidney Stone Care',
    title: 'Urology',
    description:
      'Minimally invasive and robotic-assisted urological care — from kidney stone management to prostate and reconstructive procedures.',
    image: '/Urology.jpg',
    icon: Waves,
    badge: 'ROBOTIC',
    stats: [
      { value: 'Home-Based', label: 'POST-OPERATIVE CARE' },
      { value: '90%', label: 'MINIMALLY INVASIVE PROCEDURES' },
      { value: '< 24h', label: 'HOSPITAL STAY' },
    ],
    compliance: 'ALIGNED WITH EAU GUIDELINES',
    accent: '#155a40',
    goldBadge: 'MINIMALLY INVASIVE UROLOGY',
    overview:
      "Our Urology programme combines endoscopic stone management, robotic-assisted surgery and comprehensive men's health services for precise, minimally invasive treatment.",
    procedures: ['Kidney Stone Management (RIRS/PCNL)', 'Robotic & Laparoscopic Urologic Surgery', 'Prostate Care', 'Male Infertility & Andrology', 'Urologic Cancer Care'],
    specialists: [
      { name: 'Dr. David Kim', title: 'Senior Urologist & Transplant Surgeon', exp: '21+ Yrs Exp' },
      { name: 'Dr. Priya Menon', title: 'Consultant Urologist', exp: '12+ Yrs Exp' },
    ],
  },
  {
    id: '10',
    shortLabel: 'SURGERY',
    category: 'General & Minimally Invasive Surgery',
    title: 'General Surgery',
    description:
      'Laparoscopic and minimally invasive surgical care across a broad range of general surgical conditions, with faster recovery as the goal.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
    icon: Scissors,
    badge: 'ADVANCED',
    stats: [
      { value: '4k+', label: 'LAPAROSCOPIC SURGERIES' },
      { value: '24h', label: 'AVG. DISCHARGE TIME' },
      { value: '95%', label: 'DAY-CARE SUCCESS RATE' },
    ],
    compliance: 'BENCHMARKED TO RCS / ACS STANDARDS',
    accent: '#15803D',
    goldBadge: 'DAY-CARE SURGERY EXCELLENCE',
    overview:
      'Our General Surgery programme uses minimally invasive and laparoscopic techniques wherever possible, reducing recovery time while maintaining surgical precision across a wide range of conditions.',
    procedures: ['Laparoscopic Gallbladder & Hernia Surgery', 'GI & Abdominal Surgery', 'Emergency & Trauma Surgery', 'Breast Surgery', 'Day-Care Surgical Procedures'],
    specialists: [
      { name: 'Dr. Rahul Iyer', title: 'Chief of General Surgery', exp: '19+ Yrs Exp' },
      { name: 'Dr. Neha Sharma', title: 'Consultant, Minimally Invasive Surgery', exp: '13+ Yrs Exp' },
    ],
  },
  {
    id: '11',
    shortLabel: 'ENT',
    category: 'Ear, Nose & Throat Care',
    title: 'ENT',
    description:
      'Comprehensive ENT care covering hearing, sinus, voice and airway conditions, from diagnosis through surgical management.',
    image: '/modules11.jpg',
    icon: Ear,
    badge: 'SPECIALIST CARE',
    stats: [
      { value: '99%', label: 'PATIENT SATISFACTION' },
      { value: 'Home Trial', label: 'HEARING AID TRIAL AVAILABLE' },
      { value: '3k+', label: 'PROCEDURES PERFORMED' },
    ],
    compliance: 'ALIGNED WITH AAO-HNS GUIDELINES',
    accent: '#047857',
    goldBadge: 'COMPREHENSIVE ENT CARE',
    overview:
      'Our ENT programme addresses the full range of ear, nose and throat conditions — medical and surgical — with a focus on preserving hearing, breathing and voice function.',
    procedures: ['Endoscopic Sinus Surgery', 'Hearing Evaluation & Management', 'Voice & Throat Disorders', 'Paediatric ENT Care', 'Sleep Apnoea & Snoring Treatment'],
    specialists: [
      { name: 'Dr. Farhan Ali', title: 'Head of ENT', exp: '17+ Yrs Exp' },
      { name: 'Dr. Divya Pillai', title: 'Consultant Audiologist', exp: '10+ Yrs Exp' },
    ],
  },
  {
    id: '12',
    shortLabel: 'PSYCHIATRY',
    category: 'Mental Health & Psychiatric Care',
    title: 'Psychiatry',
    description:
      'Confidential, evidence-based psychiatric care for mood, anxiety and thought disorders, integrated with counselling and long-term follow-up.',
    image: '/modules12.jpg',
    icon: MessagesSquare,
    badge: 'DEDICATED',
    stats: [
      { value: '500+', label: 'CONSULTATIONS / YEAR' },
      { value: '90%', label: 'FOLLOW-UP ADHERENCE' },
      { value: '60 mins', label: 'AVG. CONSULTATION TIME' },
    ],
    compliance: 'GOVERNED BY APA / NICE GUIDELINES',
    accent: '#1f5e46',
    goldBadge: 'MENTAL HEALTH EXCELLENCE',
    overview:
      'Our Psychiatry programme provides diagnostic evaluation and evidence-based treatment for mental health conditions, combined with structured follow-up and coordination with psychological support services.',
    procedures: ['Mood & Anxiety Disorder Management', 'Diagnostic Psychiatric Evaluation', 'Medication Management', 'De-Addiction Support', 'Crisis Intervention'],
    specialists: [
      { name: 'Dr. Rohan Kapoor', title: 'Lead Psychiatrist', exp: '15+ Yrs Exp' },
      { name: 'Dr. Sneha Bose', title: 'Consultant Psychiatrist', exp: '11+ Yrs Exp' },
    ],
  },
  {
    id: '13',
    shortLabel: 'REHABILITATION',
    category: 'Physical Medicine & Rehabilitation',
    title: 'Physical Medicine and Rehabilitation',
    description:
      'Structured rehabilitation for physical impairment and disability, restoring function through goal-driven, multidisciplinary therapy.',
    image: '/modules13.jpg',
    icon: Dumbbell,
    badge: 'COMPREHENSIVE',
    stats: [
      { value: '1.2k+', label: 'PATIENTS REHABILITATED' },
      { value: '95%', label: 'FUNCTIONAL GAIN' },
      { value: '3 months', label: 'AVG. PROGRAMME DURATION' },
    ],
    compliance: 'BENCHMARKED TO AAPM&R STANDARDS',
    accent: '#174534',
    goldBadge: 'REHABILITATION EXCELLENCE',
    overview:
      'Our Physical Medicine & Rehabilitation programme combines physiatry, physiotherapy and assistive technology to restore mobility and independence after injury, illness or surgery.',
    procedures: ['Musculoskeletal Rehabilitation', 'Neuro-Rehabilitation Coordination', 'Prosthetics & Orthotics Support', 'Pain Management', 'Functional Independence Training'],
    specialists: [
      { name: 'Dr. Karan Malhotra', title: 'Head of PM&R', exp: '16+ Yrs Exp' },
      { name: 'Dr. Ayesha Khan', title: 'Consultant Physiatrist', exp: '12+ Yrs Exp' },
    ],
  },
  {
    id: '14',
    shortLabel: 'PSYCHOLOGY',
    category: 'Psychological & Behavioural Health',
    title: 'Clinical Psychology',
    description:
      'Structured psychological assessment and therapy for emotional, behavioural and developmental concerns, across all age groups.',
    image: '/modules14.jpg',
    icon: BrainCog,
    badge: 'DEDICATED',
    stats: [
      { value: '36+', label: 'SESSIONS CONDUCTED' },
      { value: '90%', label: 'CLIENT-REPORTED IMPROVEMENT' },
      { value: '1 hr', label: 'AVG. SESSION LENGTH' },
    ],
    compliance: 'ANCHORED IN APA PRACTICE GUIDELINES',
    accent: '#247355',
    goldBadge: 'BEHAVIOURAL HEALTH EXCELLENCE',
    overview:
      'Our Clinical Psychology programme offers structured assessment and evidence-based therapy — individual, family or child-focused — supporting patients alongside psychiatric and rehabilitative care.',
    procedures: ['Psychological Assessment & Testing', 'Cognitive Behavioural Therapy (CBT)', 'Child & Adolescent Counselling', 'Family Therapy', 'Stress & Behavioural Management'],
    specialists: [
      { name: 'Dr. Leela Menon', title: 'Lead Clinical Psychologist', exp: '14+ Yrs Exp' },
      { name: 'Dr. Vivek Nair', title: 'Consultant Psychologist', exp: '9+ Yrs Exp' },
    ],
  },
  {
    id: '15',
    shortLabel: 'PAEDIATRICS',
    category: 'Child & Adolescent Care',
    title: 'Paediatrics',
    description:
      'Complete child healthcare from newborn care to adolescent medicine, guided by national and international paediatric protocols.',
    image: '/modules15.jpg',
    icon: Baby,
    badge: 'SPECIALIST CARE',
    stats: [
      { value: '5000+', label: 'CHILDREN TREATED' },
      { value: '100%', label: 'IMMUNISATION COMPLIANCE' },
      { value: '20 mins', label: 'AVG. CONSULTATION TIME' },
    ],
    compliance: 'ALIGNED WITH IAP GUIDELINES',
    accent: '#106444',
    goldBadge: 'CHILD HEALTH EXCELLENCE',
    overview:
      'Our Paediatrics programme covers routine and specialist child healthcare — growth monitoring, immunisation, and management of acute and chronic paediatric conditions — in a child-friendly setting.',
    procedures: ['Newborn & Neonatal Care', 'Immunisation & Growth Monitoring', 'Paediatric Infectious Disease Management', 'Developmental Assessment', 'Adolescent Medicine'],
    specialists: [
      { name: 'Dr. Ritu Chawla', title: 'Head of Paediatrics', exp: '18+ Yrs Exp' },
      { name: 'Dr. Aditya Rao', title: 'Consultant Paediatrician', exp: '12+ Yrs Exp' },
    ],
  },
  {
    id: '16',
    shortLabel: 'GYNAECOLOGY',
    category: "Women's Health & Gynaecology",
    title: 'Gynaecology',
    description:
      "Comprehensive women's health care across every life stage — from routine gynaecology to minimally invasive and robotic-assisted surgery.",
    image: '/modules16.jpg',
    icon: Flower2,
    badge: 'ROBOTIC',
    stats: [
      { value: '2000+', label: 'PROCEDURES PERFORMED' },
      { value: '95%', label: 'MINIMALLY INVASIVE CASES' },
      { value: '24 hrs', label: 'AVG. RECOVERY TIME' },
    ],
    compliance: 'GOVERNED BY FOGSI / ACOG GUIDELINES',
    accent: '#9D174D',
    goldBadge: "WOMEN'S HEALTH EXCELLENCE",
    overview:
      "Our Gynaecology programme covers the full spectrum of women's health, from preventive screening and fertility support to minimally invasive and robotic-assisted surgical care.",
    procedures: ['Minimally Invasive & Robotic Gynae Surgery', 'High-Risk Pregnancy Management', 'Fertility & Reproductive Health', 'Menstrual & Hormonal Disorders', 'Cervical & Breast Cancer Screening'],
    specialists: [
      { name: 'Dr. Meenal Deshpande', title: 'Head of Gynaecology & Obstetrics', exp: '19+ Yrs Exp' },
      { name: 'Dr. Pooja Reddy', title: 'Consultant, Minimally Invasive Gynae Surgery', exp: '13+ Yrs Exp' },
    ],
  },
];

const Modular = () => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [autoplayInterval, setAutoplayInterval] = useState(AUTOPLAY_INTERVAL_DEFAULT);

  // Filter modules based on search and category
  const filteredModules = MODULES_DATA.filter((mod) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      mod.title.toUpperCase().includes(selectedCategory) ||
      mod.category.toUpperCase().includes(selectedCategory);
    const matchesSearch =
      searchQuery === '' ||
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const modules = filteredModules.length > 0 ? filteredModules : MODULES_DATA;

  const [activeIndex, setActiveIndex] = useState(0); // real index (0..N-1)
  const [trackIndex, setTrackIndex] = useState(1); // index inside cloned track
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [cardStep, setCardStep] = useState(0); // px per card (card width + gap)
  const [selectedModule, setSelectedModule] = useState(null); // For detail drawer modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = modules.length;
  const totalCount = String(total).padStart(2, '0');

  // Build cloned list: [last, ...modules, first] for seamless looping
  const extended = [modules[total - 1] || modules[0], ...modules, modules[0] || modules[0]];

  // Measure card width + gap for translating the track
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('.mod-card');
    if (!firstCard) return;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '28') || 28;
    setCardStep(firstCard.getBoundingClientRect().width + gap);
  }, []);

  useEffect(() => {
    measure();
    const onResize = () => {
      setNoTransition(true);
      measure();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measure, modules]);

  // Reset track index when modules array changes
  useEffect(() => {
    setTrackIndex(1);
    setActiveIndex(0);
  }, [selectedCategory, searchQuery]);

  // Move to next / prev
  const goNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setNoTransition(false);
    setTrackIndex((i) => i + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setNoTransition(false);
    setTrackIndex((i) => i - 1);
  }, []);

  const goTo = useCallback((realIdx) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setNoTransition(false);
    setTrackIndex(realIdx + 1); // +1 to skip leading clone
  }, []);

  // When transition ends: if we're on a clone, snap to the real slide with no transition
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    if (trackIndex === 0) {
      setNoTransition(true);
      setTrackIndex(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    } else if (trackIndex === total + 1) {
      setNoTransition(true);
      setTrackIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    }
  };

  // Keep activeIndex synced
  useEffect(() => {
    let real = trackIndex - 1;
    if (real < 0) real = total - 1;
    if (real >= total) real = 0;
    setActiveIndex(real);
  }, [trackIndex, total]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying || isHovering || isModalOpen) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      return;
    }
    autoplayRef.current = setInterval(() => {
      goNext();
    }, autoplayInterval);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPlaying, isHovering, isModalOpen, autoplayInterval, goNext]);

  // Pause when tab hidden
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Touch swipe support
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsHovering(true);
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 40;
    if (touchDeltaX.current > threshold) goPrev();
    else if (touchDeltaX.current < -threshold) goNext();
    setIsHovering(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (isModalOpen) {
        if (e.key === 'Escape') setIsModalOpen(false);
        return;
      }
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      if (!inView) return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, isModalOpen]);

  const openExploreModal = (mod) => {
    setSelectedModule(mod);
    setIsModalOpen(true);
  };

  // Dynamically build category pills from the 16 specialties
  const categories = [
    { label: 'ALL', icon: Filter },
    ...MODULES_DATA.map((m) => ({ label: m.shortLabel, icon: m.icon })),
  ];

  const whatsappHref = selectedModule
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi Aureal Healthcare, I'd like to enquire about ${selectedModule.title} consultation. Please share available appointment slots.`
      )}`
    : '#';

  const translateX = -trackIndex * cardStep;

  return (
    <section className="modular-section" ref={sectionRef}>
      {/* Subtle grid & soft green glows */}
      <div className="mod-bg-grid"></div>
      <div className="mod-bg-glow mod-bg-glow-1"></div>
      <div className="mod-bg-glow mod-bg-glow-2"></div>
      <div className="mod-bg-glow mod-bg-glow-gold"></div>

      <div className="mod-container">
        {/* Top Utility Bar */}
        <div className="mod-top-bar">
          <div className="mod-brand">
            <span className="mod-brand-badge">
              <Sparkles size={14} className="icon-gold" /> SUPREME CLINICAL PATHWAYS
            </span>
            <span className="mod-brand-status">
              <span className="mod-status-dot"></span> 24×7 Active Institutes
            </span>
          </div>

          <div className="mod-controls-right">
            {/* Search filter */}
            <div className="mod-search-box">
              <Search size={15} className="mod-search-icon" />
              <input
                type="text"
                placeholder="Search speciality, doctor, condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mod-search-input"
              />
              {searchQuery && (
                <button className="mod-search-clear" onClick={() => setSearchQuery('')}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Speed Selector */}
            <div className="mod-speed-toggle">
              <Clock size={14} className="mod-speed-icon" />
              <select
                value={autoplayInterval}
                onChange={(e) => setAutoplayInterval(Number(e.target.value))}
                className="mod-speed-select"
                title="Autoplay Speed"
              >
                <option value={3000}>3.0s</option>
                <option value={4500}>4.5s</option>
                <option value={6000}>6.0s</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Header */}
        <div className="mod-category-bar">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isCatActive = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                className={`mod-cat-pill ${isCatActive ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <CatIcon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Header */}
        <div className="mod-header">
          <div className="mod-header-left">
            <div className="mod-tag">
              <span className="mod-tag-line"></span>
              <span className="mod-tag-text">INTEGRATED SOLUTIONS FOR COMPLEX CONDITIONS</span>
            </div>
            <h2 className="mod-title">
              Our Multidisciplinary <br />
              <span className="mod-title-italic">Specialities.</span>
            </h2>
          </div>

          <div className="mod-header-right">
            <p className="mod-description">
              With 16 dedicated clinical specialities operating under unified
              governance frameworks, our multi-disciplinary teams are led by
              specialists, anchored in global medical guidelines, and follow a
              strict collaborative model to ensure cohesive, real-time care.
            </p>
            <div className="mod-nav">
              <button
                className={`mod-play-btn ${isPlaying ? 'is-playing' : ''}`}
                onClick={() => setIsPlaying((p) => !p)}
                aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
                title={isPlaying ? 'Pause Autoplay' : 'Play Autoplay'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <div className="mod-counter">
                <span className="mod-counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="mod-counter-line"></span>
                <span className="mod-counter-total">{totalCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION WITH SIDE ARROWS ON BOTH SIDES */}
        <div className="mod-carousel-container">
          {/* FLOATING LEFT NAVIGATION ARROW */}
          <button
            className="mod-side-arrow mod-side-arrow-left"
            onClick={goPrev}
            aria-label="Previous Slide"
            title="Previous Speciality"
          >
            <ChevronLeft size={28} />
          </button>

          {/* FLOATING RIGHT NAVIGATION ARROW */}
          <button
            className="mod-side-arrow mod-side-arrow-right"
            onClick={goNext}
            aria-label="Next Slide"
            title="Next Speciality"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards Track Wrapper */}
          <div
            className="mod-cards-wrapper"
            ref={wrapperRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={`mod-cards-track ${noTransition ? 'no-transition' : ''}`}
              ref={trackRef}
              style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extended.map((mod, idx) => {
                const isActive = idx === trackIndex;
                const isPaused = isHovering || !isPlaying;
                const IconComponent = mod.icon;

                return (
                  <article
                    key={`${mod.id}-${idx}`}
                    className={`mod-card ${isActive ? 'is-active' : ''} ${isPaused ? 'is-paused' : ''}`}
                    style={{ '--accent': mod.accent, '--duration': `${autoplayInterval}ms` }}
                    aria-hidden={!isActive}
                  >
                    {/* Image Header */}
                    <div className="mod-card-image">
                      <img src={mod.image} alt={mod.title} loading="lazy" />
                      <div className="mod-card-image-overlay"></div>
                      <span className="mod-card-badge">
                        <Award size={12} className="icon-gold" />
                        {mod.badge}
                      </span>
                      <span className="mod-card-number">{mod.id}</span>
                    </div>

                    {/* Category Label */}
                    <div className="mod-card-category">
                      <span className="mod-card-icon">
                        <IconComponent size={22} />
                      </span>
                      <span className="mod-card-cat-text">{mod.category}</span>
                    </div>

                    {/* Dark Green Card Title */}
                    <h3 className="mod-card-title">{mod.title}</h3>
                    <div className="mod-card-divider"></div>

                    {/* Black Paragraph Description */}
                    <p className="mod-card-desc">{mod.description}</p>

                    {/* Key Performance Stats */}
                    <div className="mod-card-stats">
                      {mod.stats.map((stat, i) => (
                        <div className="mod-stat" key={i}>
                          <div className="mod-stat-value">{stat.value}</div>
                          <div className="mod-stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Accreditation */}
                    <div className="mod-card-compliance">
                      <CheckCircle2 size={15} className="mod-compliance-icon icon-emerald" />
                      <span>{mod.compliance}</span>
                    </div>

                    {/* Interactive CTA */}
                    <button className="mod-card-cta" onClick={() => openExploreModal(mod)}>
                      <span>EXPLORE MORE</span>
                      <span className="mod-cta-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </button>

                    <div className="mod-card-glow"></div>

                    {/* Autoplay Progress Bar */}
                    <div className="mod-card-progress">
                      <div
                        className="mod-card-progress-bar"
                        key={`${isActive}-${trackIndex}-${isPlaying}-${isHovering}-${autoplayInterval}`}
                      ></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="mod-footer">
          <div className="mod-progress">
            {modules.map((m, idx) => (
              <button
                key={m.id || idx}
                className={`mod-progress-dot ${activeIndex === idx ? 'is-active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to ${m.title}`}
                title={m.title}
              >
                <span className="mod-dot-inner"></span>
              </button>
            ))}
          </div>

          <div className="mod-scroll-hint">
            <span className="mod-scroll-arrow">→</span>
            <span>{isPlaying ? 'AUTO-PLAYING' : 'PAUSED'} • USE SIDE ARROWS OR SWIPE</span>
          </div>
        </div>
      </div>

      {/* DETAIL MODAL DRAWER FOR "EXPLORE MORE" */}
      {isModalOpen && selectedModule && (
        <div className="mod-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="mod-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ '--modal-accent': selectedModule.accent }}
          >
            <button className="mod-modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={20} />
            </button>

            <div className="mod-modal-header">
              <div className="mod-modal-badge">
                <Award size={14} className="icon-gold" /> {selectedModule.goldBadge}
              </div>
              <h2 className="mod-modal-title">{selectedModule.title}</h2>
              <p className="mod-modal-sub">{selectedModule.category} • {selectedModule.compliance}</p>
            </div>

            <div className="mod-modal-grid">
              {/* Left Column: Overview & Procedures */}
              <div className="mod-modal-left">
                <div className="mod-modal-section">
                  <h4 className="mod-modal-h4">Clinical Overview</h4>
                  <p className="mod-modal-p">{selectedModule.overview}</p>
                </div>

                <div className="mod-modal-section">
                  <h4 className="mod-modal-h4">Key Advanced Procedures</h4>
                  <ul className="mod-modal-list">
                    {selectedModule.procedures.map((proc, i) => (
                      <li key={i}>
                        <Zap size={14} className="icon-emerald" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mod-modal-stats-row">
                  {selectedModule.stats.map((st, i) => (
                    <div key={i} className="mod-modal-stat-card">
                      <div className="mod-modal-stat-val">{st.value}</div>
                      <div className="mod-modal-stat-lbl">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Specialist Leads & WhatsApp Enquiry */}
              <div className="mod-modal-right">
                <div className="mod-modal-section">
                  <h4 className="mod-modal-h4">Lead Specialists</h4>
                  <div className="mod-modal-docs">
                    {selectedModule.specialists.map((doc, i) => (
                      <div className="mod-doc-card" key={i}>
                        <div className="mod-doc-avatar">
                          <UserCheck size={20} className="icon-emerald" />
                        </div>
                        <div>
                          <div className="mod-doc-name">{doc.name}</div>
                          <div className="mod-doc-title">{doc.title}</div>
                          <div className="mod-doc-exp">{doc.exp}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mod-modal-booking">
                  <h4 className="mod-modal-h4">Book a Specialist Enquiry</h4>
                  <p className="mod-modal-booking-copy">
                    Get in touch with our care team in one tap — no forms to fill.
                  </p><br />
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mod-form-btn mod-whatsapp-btn"
                  >
                    <MessageCircle size={16} /> Send WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Modular;