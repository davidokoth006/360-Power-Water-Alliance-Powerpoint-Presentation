"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  Power,
  Zap,
  Wrench,
  Globe,
  Award,
  CheckCircle,
  Clock,
  Users,
  MapPin,
  TrendingUp,
  Gauge,
  Settings,
  Phone,
  Mail,
  Calendar,
  Target,
} from "lucide-react"

const slides = [
  {
    id: 1,
    type: "title",
    title: "POWER & WATER ALLIANCE",
    subtitle: "360 TURBINES",
    tagline: "Delivering Turnkey Thermal Power Solutions",
    description: "Strategic Partnership for Rapid Power Generation Deployment in the U.S. Market",
    backgroundImage: "https://www.360turbines.com/wp-content/uploads/2011/12/banner-3.jpg?height=800&width=1200",
  },
  {
    id: 2,
    type: "partnership",
    title: "Strategic Partnership Overview",
    subtitle: "Combining Expertise for Unprecedented Speed & Quality",
    content: {
      pwa: {
        name: "Power & Water Alliance",
        strengths: ["EPC Excellence", "Grid Integration", "Water Treatment", "T&D Systems"],
        experience: "25+ Years",
      },
      turbines360: {
        name: "360 Turbines",
        strengths: ["Turbine Manufacturing", "Rapid Deployment", "O&M Services", "Performance Optimization"],
        experience: "Industry Leader",
      },
    },
    backgroundImage: "/placeholder.svg?height=600&width=1000",
  },
  {
    id: 3,
    type: "capabilities",
    title: "Combined Capabilities Matrix",
    subtitle: "Comprehensive Power Solutions Ecosystem",
    capabilities: [
      {
        icon: Power,
        title: "EPC Services",
        desc: "Complete Engineering, Procurement & Construction",
        details: [
          "Conceptual to Detailed Engineering",
          "Global Procurement Network",
          "Fast-Track Construction",
          "Commissioning & Start-up",
        ],
        image: "https://powerandwateralliance.com/images/EPC_Services_Power_Plants.jpg?height=300&width=400",
      },
      {
        icon: Zap,
        title: "Turbine Solutions",
        desc: "2-Week Delivery Guarantee",
        details: ["Extensive Inventory", "GE, Siemens, Mitsubishi", "25MW to 400MW Range", "Immediate Availability"],
        image: "https://www.360turbines.com/wp-content/uploads/2011/12/img-31.jpg?height=300&width=400",
      },
      {
        icon: Wrench,
        title: "O&M Excellence",
        desc: "Lifecycle Support & Maintenance",
        details: ["24/7 Remote Monitoring", "Predictive Maintenance", "Major Overhauls", "Performance Optimization"],
        image: "https://powerandwateralliance.com/images/Power_Plant_Turbines.jpg?height=300&width=400",
      },
      {
        icon: Globe,
        title: "Grid Integration",
        desc: "Smart Grid & Distribution Solutions",
        details: ["Substation Design", "Protection Systems", "SCADA Integration", "Grid Stability"],
        image: "https://www.360turbines.com/wp-content/uploads/2011/12/img-21.jpg?height=300&width=400",
      },
    ],
  },
  {
    id: 4,
    type: "timeline",
    title: "Rapid Deployment Timeline",
    subtitle: "From Contract to Commercial Operation",
    timeline: [
      {
        phase: "Contract Execution",
        duration: "Day 1",
        activities: ["PO Processing", "Technical Review", "Resource Allocation"],
        color: "#009FE3",
      },
      {
        phase: "Manufacturing & Procurement",
        duration: "Days 2-14",
        activities: ["Turbine Preparation", "Auxiliary Equipment", "Quality Control"],
        color: "#F05A28",
      },
      {
        phase: "Delivery & Logistics",
        duration: "Days 15-21",
        activities: ["Transportation", "Site Preparation", "Equipment Staging"],
        color: "#009FE3",
      },
      {
        phase: "Installation & Commissioning",
        duration: "Days 22-45",
        activities: ["Mechanical Installation", "Electrical Connection", "System Testing"],
        color: "#F05A28",
      },
      {
        phase: "Commercial Operation",
        duration: "Day 46+",
        activities: ["Performance Testing", "Grid Synchronization", "Handover"],
        color: "#28a745",
      },
    ],
    backgroundImage: "/placeholder.svg?height=400&width=1200",
  },
  {
    id: 5,
    type: "projects",
    title: "Global Project Portfolio",
    subtitle: "Proven Track Record Across Continents",
    projects: [
      {
        name: "West Tripoli Power Plant",
        year: "2017",
        capacity: "2 × 30 MW",
        location: "Libya",
        client: "GECOL",
        turbine: "GE FT8 Pratt & Whitney",
        scope: "Full EPC + O&M Training",
        image: "https://powerandwateralliance.com/images/Water_Treatment_Solutions.jpg?height=250&width=350",
        status: "Completed",
      },
      {
        name: "Antonio Jose de Sucre",
        year: "2014",
        capacity: "2 × 170 MW",
        location: "Venezuela",
        client: "CORPOELEC",
        turbine: "GE 7FA",
        scope: "EPC + Performance Testing",
        image: "https://powerandwateralliance.com/images/Turbine_Diesel_Generators.jpg?height=250&width=350",
        status: "Operational",
      },
      {
        name: "GANA Electric",
        year: "2016",
        capacity: "2 × 80 MW",
        location: "International",
        client: "GANA",
        turbine: "GE Frame 6B",
        scope: "Complete Turnkey Solution",
        image: "https://www.360turbines.com/wp-content/uploads/2019/05/124-MW-GE-F9-300x300.jpg?height=250&width=350",
        status: "Operational",
      },
    ],
  },
  {
    id: 6,
    type: "technical",
    title: "Technical Specifications & Performance",
    subtitle: "Industry-Leading Equipment & Standards",
    specs: {
      turbines: [
        { model: "GE 7FA", power: "170-190 MW", efficiency: "36-38%", applications: "Base Load" },
        { model: "GE Frame 6B", power: "40-80 MW", efficiency: "35-37%", applications: "Peaking/Mid-Merit" },
        { model: "Siemens W501D5", power: "100-120 MW", efficiency: "34-36%", applications: "Industrial" },
        { model: "Solar Titan 130", power: "15-20 MW", efficiency: "32-34%", applications: "Distributed" },
      ],
      performance: {
        availability: 95,
        reliability: 98,
        efficiency: 37,
        emissions: 25,
      },
    },
    backgroundImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 7,
    type: "services",
    title: "Comprehensive Service Portfolio",
    subtitle: "End-to-End Lifecycle Support",
    services: [
      {
        category: "Engineering Services",
        items: ["Feasibility Studies", "Detailed Design", "Environmental Impact", "Permitting Support"],
        icon: Settings,
        color: "#009FE3",
      },
      {
        category: "Procurement & Supply",
        items: ["Global Sourcing", "Quality Assurance", "Logistics Management", "Inventory Optimization"],
        icon: "Package",
        color: "#F05A28",
      },
      {
        category: "Construction & Installation",
        items: ["Project Management", "Site Preparation", "Mechanical Installation", "Electrical Integration"],
        icon: Wrench,
        color: "#009FE3",
      },
      {
        category: "Operations & Maintenance",
        items: ["Remote Monitoring", "Preventive Maintenance", "Emergency Response", "Performance Optimization"],
        icon: Gauge,
        color: "#F05A28",
      },
    ],
  },
  {
    id: 8,
    type: "advantages",
    title: "Competitive Advantages",
    subtitle: "Why Choose Our Partnership",
    advantages: [
      {
        title: "Speed to Market",
        description: "2-week turbine delivery vs. industry standard 12-16 weeks",
        metric: "85% Faster",
        icon: Clock,
        color: "#009FE3",
      },
      {
        title: "Proven Experience",
        description: "Combined 40+ years in power generation projects",
        metric: "1000+ MW Deployed",
        icon: Award,
        color: "#F05A28",
      },
      {
        title: "Global Reach",
        description: "Projects delivered across 15+ countries",
        metric: "15+ Countries",
        icon: Globe,
        color: "#009FE3",
      },
      {
        title: "Cost Efficiency",
        description: "Optimized procurement and fast-track deployment",
        metric: "20% Cost Savings",
        icon: TrendingUp,
        color: "#F05A28",
      },
    ],
  },
  {
    id: 9,
    type: "team",
    title: "Expert Leadership Team",
    subtitle: "Decades of Combined Experience",
    team: [
      {
        name: "Engineering Director",
        role: "Power Systems Engineering",
        experience: "15+ Years",
        expertise: ["Gas Turbines", "Power Plant Design", "Grid Integration"],
        image: "https://images.unsplash.com/photo-1636990165439-ad91410514e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZSUyMG9mZmljaWFsfGVufDB8fDB8fHww?height=200&width=200",
      },
      {
        name: "Operations Manager",
        role: "Project Execution",
        experience: "20+ Years",
        expertise: ["EPC Management", "Construction", "Commissioning"],
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D?height=200&width=200",
      },
      {
        name: "Technical Director",
        role: "O&M Services",
        experience: "18+ Years",
        expertise: ["Maintenance", "Performance", "Reliability"],
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D?height=200&width=200",
      },
    ],
  },
  {
    id: 10,
    type: "contact",
    title: "Ready to Power Your Project",
    subtitle: "Let's Discuss Your Power Generation Needs",
    contacts: [
      {
        company: "Power & Water Alliance",
        website: "www.powerandwateralliance.com",
        phone: "+1 (555) 123-4567",
        email: "info@powerandwateralliance.com",
        address: "Houston, TX",
      },
      {
        company: "360 Turbines",
        website: "www.360turbines.com",
        phone: "+1 (555) 987-6543",
        email: "sales@360turbines.com",
        address: "Dallas, TX",
      },
    ],
    cta: "Schedule a consultation today to discuss your power generation requirements",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
  },
]

// Add Package icon component since it's not in lucide-react
const Package = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
)

export default function EnhancedPWAPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002E5D] via-[#004080] to-[#002E5D] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      {/* Navigation */}
      <div className="fixed top-6 left-6 right-6 z-20 flex justify-between items-center">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#009FE3] scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        <div className="bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex items-center justify-center min-h-screen p-8 relative z-10">
        <div className="w-full max-w-7xl">
          {/* Title Slide */}
          {slide.type === "title" && (
            <div className="text-center space-y-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent rounded-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-center gap-12 mb-12">
                  <div className="text-right space-y-2">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#009FE3] leading-tight">POWER & WATER</h1>
                    <h2 className="text-3xl md:text-4xl font-light text-[#7A7A7A]">ALLIANCE</h2>
                  </div>
                  <div className="w-1 h-32 bg-gradient-to-b from-[#009FE3] to-[#F05A28] rounded-full"></div>
                  <div className="text-left space-y-2">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#F05A28] leading-tight">360</h1>
                    <h2 className="text-3xl md:text-4xl font-light text-[#7A7A7A]">TURBINES</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white">{slide.tagline}</h3>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">{slide.description}</p>
                </div>
                <div className="flex justify-center gap-4 pt-8">
                  <Badge variant="secondary" className="bg-[#009FE3]/20 text-[#009FE3] px-4 py-2 text-lg">
                    2-Week Delivery
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F05A28]/20 text-[#F05A28] px-4 py-2 text-lg">
                    Turnkey Solutions
                  </Badge>
                </div>
              </div>
            </div>
          )}

          {/* Partnership Overview */}
          {slide.type === "partnership" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-[#009FE3]/20 to-[#009FE3]/5 border-[#009FE3]/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#009FE3] flex items-center gap-3">
                      <Power className="w-8 h-8" />
                      {slide.content?.pwa.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#009FE3]" />
                      <span className="text-white font-semibold">{slide.content?.pwa.experience}</span>
                    </div>
                    <div className="space-y-3">
                      {slide.content?.pwa.strengths.map((strength, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#009FE3]" />
                          <span className="text-white">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#F05A28]/20 to-[#F05A28]/5 border-[#F05A28]/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#F05A28] flex items-center gap-3">
                      <Zap className="w-8 h-8" />
                      {slide.content?.turbines360.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#F05A28]" />
                      <span className="text-white font-semibold">{slide.content?.turbines360.experience}</span>
                    </div>
                    <div className="space-y-3">
                      {slide.content?.turbines360.strengths.map((strength, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#F05A28]" />
                          <span className="text-white">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Capabilities Matrix */}
          {slide.type === "capabilities" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {slide.capabilities?.map((capability, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden group hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#009FE3]/20 to-[#F05A28]/20 flex items-center justify-center">
                      <img
                        src={capability.image || "/placeholder.svg"}
                        alt={capability.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#009FE3] rounded-full flex items-center justify-center">
                          <capability.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                          <p className="text-white/70">{capability.desc}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {capability.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-[#F05A28] rounded-full"></div>
                            <span className="text-white/80">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Timeline */}
          {slide.type === "timeline" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#009FE3] via-[#F05A28] to-[#28a745] rounded-full"></div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {slide.timeline?.map((phase, index) => (
                    <div key={index} className="relative">
                      <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                        <CardContent className="p-6 text-center space-y-4">
                          <div
                            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-lg"
                            style={{ backgroundColor: phase.color }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                            <p className="text-sm text-white/70 mb-3">{phase.duration}</p>
                            <div className="space-y-1">
                              {phase.activities.map((activity, idx) => (
                                <div key={idx} className="text-xs text-white/60">
                                  • {activity}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Portfolio */}
          {slide.type === "projects" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {slide.projects?.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden group hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white">{project.status}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-[#009FE3] text-[#009FE3]">
                          {project.year}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-white/70">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/70">Capacity:</span>
                          <span className="text-white font-semibold">{project.capacity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">Client:</span>
                          <span className="text-white">{project.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">Turbine:</span>
                          <span className="text-white">{project.turbine}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/20">
                        <p className="text-sm text-white/80">{project.scope}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications */}
          {slide.type === "technical" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#009FE3] flex items-center gap-3">
                      <Settings className="w-8 h-8" />
                      Turbine Portfolio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {slide.specs?.turbines.map((turbine, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-lg font-semibold text-white">{turbine.model}</h4>
                          <Badge className="bg-[#F05A28] text-white">{turbine.applications}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-white/70">Power Output:</span>
                            <div className="text-white font-semibold">{turbine.power}</div>
                          </div>
                          <div>
                            <span className="text-white/70">Efficiency:</span>
                            <div className="text-white font-semibold">{turbine.efficiency}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#F05A28] flex items-center gap-3">
                      <Gauge className="w-8 h-8" />
                      Performance Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-white">Availability</span>
                          <span className="text-white font-semibold">{slide.specs?.performance.availability}%</span>
                        </div>
                        <Progress value={slide.specs?.performance.availability} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-white">Reliability</span>
                          <span className="text-white font-semibold">{slide.specs?.performance.reliability}%</span>
                        </div>
                        <Progress value={slide.specs?.performance.reliability} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-white">Efficiency</span>
                          <span className="text-white font-semibold">{slide.specs?.performance.efficiency}%</span>
                        </div>
                        <Progress value={slide.specs?.performance.efficiency} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-white">Emissions Reduction</span>
                          <span className="text-white font-semibold">{slide.specs?.performance.emissions}%</span>
                        </div>
                        <Progress value={slide.specs?.performance.emissions} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Services Portfolio */}
          {slide.type === "services" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {slide.services?.map((service, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3" style={{ color: service.color }}>
                        {service.icon === "Package" ? (
                          <Package className="w-8 h-8" />
                        ) : (
                          <service.icon className="w-8 h-8" />
                        )}
                        {service.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                          <span className="text-white">{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Competitive Advantages */}
          {slide.type === "advantages" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {slide.advantages?.map((advantage, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 border-white/20 backdrop-blur-sm text-center group hover:bg-white/15 transition-all duration-300"
                  >
                    <CardContent className="p-8 space-y-6">
                      <div
                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: advantage.color }}
                      >
                        <advantage.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
                        <p className="text-white/70 text-sm mb-4">{advantage.description}</p>
                        <div className="text-2xl font-bold" style={{ color: advantage.color }}>
                          {advantage.metric}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {slide.type === "team" && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {slide.team?.map((member, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm text-center">
                    <CardContent className="p-8 space-y-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-[#009FE3] to-[#F05A28] p-1">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-[#009FE3] mb-2">{member.role}</p>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          <Users className="w-4 h-4 text-[#F05A28]" />
                          <span className="text-white/70 text-sm">{member.experience}</span>
                        </div>
                        <div className="space-y-2">
                          {member.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="border-white/30 text-white/80 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          {slide.type === "contact" && (
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-[#009FE3]">{slide.title}</h1>
                <p className="text-xl text-white/80">{slide.subtitle}</p>
                <p className="text-lg text-white/70 max-w-3xl mx-auto">{slide.cta}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {slide.contacts?.map((contact, index) => (
                  <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-2xl text-[#009FE3] text-center">{contact.company}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-[#009FE3]" />
                          <span className="text-white">{contact.website}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-[#F05A28]" />
                          <span className="text-white">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-[#009FE3]" />
                          <span className="text-white">{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[#F05A28]" />
                          <span className="text-white">{contact.address}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center pt-8">
                <Button size="lg" className="bg-[#009FE3] hover:bg-[#007BC0] text-white px-8 py-4 text-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 right-8 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/90 z-20">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  )
}
