import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaSync,
  FaPlay,
  FaPause,
  FaSearchPlus,
  FaShoppingCart,
  FaEye,
  FaBolt,
  FaCheck,
  FaSlidersH,
  FaInfoCircle,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useAchievement } from "../context/AchievementContext";
import { products } from "../data/products";
import "./GearShowcase360.css";

interface Hotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
}

interface ShowcaseGear {
  id: string;
  productId: number;
  name: string;
  categoryName: string;
  icon: string;
  badge: string;
  price: number;
  image: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  hotspots: Hotspot[];
  demoType: "rotate" | "flex" | "spin" | "compartments" | "workout" | "closeup";
  demoLabel: string;
}

const GEAR_ITEMS: ShowcaseGear[] = [
  {
    id: "cricket-bat",
    productId: 1,
    name: "GIGA Pro Grade-1 English Willow Bat",
    categoryName: "Cricket Bat",
    icon: "🏏",
    badge: "360° ROTATION",
    price: 18500,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    tagline: "360° Interactive Blade, Spine & Sweet Spot Analysis",
    description:
      "Handcrafted from Grade-1 English Willow with 9+ straight grains. Massive 42mm edges and extended duckbill profile for explosive power hitting in T20 tournaments.",
    specs: [
      { label: "Willow Grade", value: "Grade 1 English Willow" },
      { label: "Edge Thickness", value: "42 mm Power Edges" },
      { label: "Grain Count", value: "9 - 12 Straight Grains" },
      { label: "Weight", value: "2.7 - 2.85 lbs (Balanced Pick-up)" },
    ],
    hotspots: [
      { id: "h1", title: "Cane Chevron Grip", description: "Multi-piece Singapore cane handle with vibration-absorbing chevron rubber grip.", x: 48, y: 15 },
      { id: "h2", title: "Mid-to-Low Sweet Spot", description: "Engineered for maximum power transfer on subcontinental pitches with massive 42mm edges.", x: 50, y: 55 },
      { id: "h3", title: "Curved Spine Profile", description: "Aggressive duckbill spine distributing weight for featherlight pick-up.", x: 65, y: 70 },
    ],
    demoType: "rotate",
    demoLabel: "360° Blade Rotation",
  },
  {
    id: "cricket-gloves",
    productId: 5,
    name: "Pro Shield Leather Batting Gloves",
    categoryName: "Cricket Gloves",
    icon: "🧤",
    badge: "CLOSE-UP / ROTATION",
    price: 3400,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    tagline: "Close-up Palm & Multi-Flex Knuckle Protection",
    description:
      "Engineered with premium sheepskin leather palm, high-density split finger armor, and airflow mesh side gussets for moisture control during long innings.",
    specs: [
      { label: "Palm Leather", value: "Premium Pittards Sheepskin" },
      { label: "Finger Protection", value: "High-Density Multi-Flex Foam" },
      { label: "Ventilation", value: "Dual Airflow Mesh Gussets" },
      { label: "Wristband", value: "Sweat-Absorbing Towel Elastic" },
    ],
    hotspots: [
      { id: "g1", title: "Multi-Flex Finger Splines", description: "Segmented armor plates providing independent finger flexibility and impact absorption.", x: 35, y: 30 },
      { id: "g2", title: "Pittards Leather Palm", description: "Ultra-soft textured sheepskin palm ensuring superior bat handle traction in hot conditions.", x: 52, y: 60 },
      { id: "g3", title: "Airflow Mesh Windows", description: "Perforated breathable mesh promoting rapid heat dissipation.", x: 70, y: 45 },
    ],
    demoType: "closeup",
    demoLabel: "Close-Up Zoom & Flex",
  },
  {
    id: "helmet",
    productId: 1,
    name: "Titan Guard Pro Cricket Helmet",
    categoryName: "Helmets",
    icon: "🪖",
    badge: "360° ORBIT VIEW",
    price: 4800,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80",
    tagline: "360° High-Impact Shell & Titanium Visor Inspection",
    description:
      "BS 7928:2013 compliant cricket helmet featuring high-impact ABS outer shell, titanium grill with zero-obscurity sightlines, and dual-density EPS impact liner.",
    specs: [
      { label: "Visor Grill", value: "Grade-5 Titanium Alloy" },
      { label: "Shell Material", value: "High-Impact Polycarbonate/ABS" },
      { label: "Impact Liner", value: "Dual-Density EPS Foam" },
      { label: "Fit Mechanism", value: "Rear Micro-Dial Adjuster" },
    ],
    hotspots: [
      { id: "hl1", title: "Titanium Face Visor", description: "Ultra-lightweight titanium grill designed to withstand 150+ km/h bouncer impacts.", x: 50, y: 48 },
      { id: "hl2", title: "Air Vent Cooling Ports", description: "8 strategically placed aerodynamic channels to keep players cool in the crease.", x: 50, y: 20 },
      { id: "hl3", title: "Rear Micro-Dial Wheel", description: "Precision dial fit system providing a customized 360° snug fit around the skull.", x: 75, y: 75 },
    ],
    demoType: "rotate",
    demoLabel: "360° Orbital View",
  },
  {
    id: "running-shoes",
    productId: 4,
    name: "Nitro Stride Pro Runner",
    categoryName: "Running Shoes",
    icon: "👟",
    badge: "WALK/RUN MOTION",
    price: 7200,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    tagline: "Dynamic Stride Flex & Cushion Compression Demonstration",
    description:
      "Nitrogen-infused foam midsole paired with a carbon fiber propulsion plate. Engineered for marathon distances, quick turns, and maximum energy return.",
    specs: [
      { label: "Midsole Tech", value: "Supercritical Nitrogen Foam" },
      { label: "Plate Tech", value: "Curved Carbon Propulsion Plate" },
      { label: "Upper Material", value: "Engineered Monofilament Mesh" },
      { label: "Drop / Weight", value: "8mm Drop / 215g (Ultralight)" },
    ],
    hotspots: [
      { id: "s1", title: "Engineered Mesh Upper", description: "Seamless, breathable weave that locks down the midfoot while eliminating hot spots.", x: 30, y: 35 },
      { id: "s2", title: "Nitrogen Foam Midsole", description: "85% energy return foam providing plush landings and explosive toe-offs.", x: 55, y: 68 },
      { id: "s3", title: "High-Abrasion Rubber Outsole", description: "Multi-directional lug pattern for unmatched grip on track, turf, and road.", x: 75, y: 82 },
    ],
    demoType: "flex",
    demoLabel: "Running Stride Flex",
  },
  {
    id: "football",
    productId: 3,
    name: "FIFA Certified Match Pro Football",
    categoryName: "Footballs",
    icon: "⚽",
    badge: "3D ROTATING BALL",
    price: 3200,
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=80",
    tagline: "Aerodynamic Spin Physics & Thermo-Bonded Surface Inspection",
    description:
      "Official tournament match ball constructed with thermo-bonded seamless panels and micro-textured aerodynamic outer skin for pinpoint flight stability.",
    specs: [
      { label: "Construction", value: "32-Panel Thermo-Bonded (Zero Stitch)" },
      { label: "Outer Skin", value: "Micro-Textured PU Synthetic Leather" },
      { label: "Bladder", value: "Reinforced Butyl Air-Lock Chamber" },
      { label: "Certification", value: "FIFA Quality Pro Standard" },
    ],
    hotspots: [
      { id: "f1", title: "Thermo-Bonded Seams", description: "Heat-fused panel joints ensuring 0% water uptake and consistent sphericity.", x: 50, y: 40 },
      { id: "f2", title: "Aerodynamic Dimple Skin", description: "Micro-groove texture reducing drag for swerving free kicks and true trajectory.", x: 65, y: 60 },
      { id: "f3", title: "Air-Lock Precision Valve", description: "Specialized butyl core retaining regulation pressure for weeks without leaking.", x: 35, y: 70 },
    ],
    demoType: "spin",
    demoLabel: "3D Spin Physics",
  },
  {
    id: "badminton-racket",
    productId: 8,
    name: "AeroSpeed 9000 Badminton Racket",
    categoryName: "Badminton Rackets",
    icon: "🏸",
    badge: "SLOW ROTATION",
    price: 4999,
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    tagline: "Slow Aerodynamic Frame Rotation & String Tension Grid",
    description:
      "Ultra-high modulus carbon graphite isometric racket with slim aerodynamic frame geometry for rapid swing recovery and smashing velocity.",
    specs: [
      { label: "Frame Material", value: "Toray HM High-Modulus Carbon" },
      { label: "Balance Point", value: "295 mm (Head-Heavy Attack)" },
      { label: "Max String Tension", value: "30 lbs Pre-Strung BG-65" },
      { label: "Flex", value: "Stiff High-Speed Repulsion" },
    ],
    hotspots: [
      { id: "b1", title: "Isometric Head Frame", description: "Expanded sweet spot by 32% ensuring off-center hits retain full power.", x: 50, y: 25 },
      { id: "b2", title: "Slim Aero-Dynamic Shaft", description: "6.8mm ultra-thin graphite shaft cutting through air resistance.", x: 50, y: 55 },
      { id: "b3", title: "Control Support Cap", description: "Wider flat surface on the handle cap for quicker thumb placement during net play.", x: 50, y: 85 },
    ],
    demoType: "rotate",
    demoLabel: "Slow Aerodynamic Rotation",
  },
  {
    id: "sports-bag",
    productId: 2,
    name: "Tour Match Wheelie Pro Kit Bag",
    categoryName: "Sports Bags",
    icon: "🎒",
    badge: "COMPARTMENT DEMO",
    price: 5200,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    tagline: "Interactive Compartment Explorer & Storage Demonstration",
    description:
      "Massive 110-liter tournament kit bag with dedicated ventilated footwear tunnel, insulated bat side sleeves, and heavy-duty all-terrain roller wheels.",
    specs: [
      { label: "Capacity", value: "110 Liters (Full Team / Athlete Kit)" },
      { label: "Fabric", value: "1680D Waterproof Ballistic Nylon" },
      { label: "Compartments", value: "Main Cavity + Shoe Tunnel + 2x Bat Sleeves" },
      { label: "Wheels / Base", value: "Heavy-Duty Dual Ball Bearing Rollers" },
    ],
    hotspots: [
      { id: "bg1", title: "Ventilated Shoe Tunnel", description: "Isolated bottom chamber with mesh eyelets to keep muddy spikes separate from gear.", x: 30, y: 75 },
      { id: "bg2", title: "Insulated Bat Sleeves", description: "Padded exterior zippered pockets holding up to 3 full-size cricket bats safely.", x: 75, y: 40 },
      { id: "bg3", title: "110L Main Storage Cavity", description: "Expansive cavernous space fitting pads, helmet, 4x gloves, jerseys, and balls.", x: 50, y: 45 },
    ],
    demoType: "compartments",
    demoLabel: "Open Compartments Mode",
  },
  {
    id: "gym-equipment",
    productId: 7,
    name: "Apex Hex Dumbbell & Bench Setup",
    categoryName: "Gym Equipment",
    icon: "🏋️",
    badge: "WORKOUT MOTION DEMO",
    price: 6800,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    tagline: "Workout Motion Biomechanics & Knurled Steel Demonstration",
    description:
      "Solid cast iron hexagonal dumbbells with premium non-slip knurled chrome handles and shock-dampening virgin rubber encasing to protect gym floors.",
    specs: [
      { label: "Material", value: "Solid Cast Iron Core + Virgin Rubber" },
      { label: "Grip Tech", value: "Medium-Diamond Knurled Hard Chrome" },
      { label: "Head Design", value: "Anti-Roll Hexagonal Symmetry" },
      { label: "Weight Tolerance", value: "+/- 1% Precision Calibration" },
    ],
    hotspots: [
      { id: "gy1", title: "Diamond-Knurled Steel Grip", description: "Ergonomic contoured chrome handle providing non-slip grip even with sweaty hands.", x: 50, y: 48 },
      { id: "gy2", title: "Hex Anti-Roll Heads", description: "Hexagonal heads prevent dangerous rolling during floor workouts and push-up drops.", x: 25, y: 50 },
      { id: "gy3", title: "Shock-Absorbing Rubber", description: "Heavy-duty rubber coating dampens sound and protects tiles from chipping.", x: 75, y: 50 },
    ],
    demoType: "workout",
    demoLabel: "Workout Biomechanics Demo",
  },
];

const GearShowcase360: React.FC = () => {
  const { addToCart } = useCart();
  const { triggerAchievement } = useAchievement();

  const [selectedGearId, setSelectedGearId] = useState<string>("cricket-bat");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isAutoSpin, setIsAutoSpin] = useState<boolean>(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isActionDemoActive, setIsActionDemoActive] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [cartAdded, setCartAdded] = useState<boolean>(false);

  const turntableRef = useRef<HTMLDivElement>(null);
  const activeGear = GEAR_ITEMS.find((g) => g.id === selectedGearId) || GEAR_ITEMS[0];

  // Auto-spin turntable loop
  useEffect(() => {
    let animationFrameId: number;
    if (isAutoSpin && !isDragging) {
      const spinStep = () => {
        setRotationAngle((prev) => (prev + 0.6) % 360);
        animationFrameId = requestAnimationFrame(spinStep);
      };
      animationFrameId = requestAnimationFrame(spinStep);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoSpin, isDragging]);

  // Handle Drag / Touch rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoSpin(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotationAngle((prev) => (prev + deltaX * 0.75 + 360) % 360);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoSpin(false);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    setRotationAngle((prev) => (prev + deltaX * 0.75 + 360) % 360);
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleAddCurrentToCart = () => {
    const matchedProduct = products.find((p) => p.id === activeGear.productId) || {
      id: activeGear.productId,
      name: activeGear.name,
      category: activeGear.categoryName,
      price: activeGear.price,
      image: activeGear.image,
      rating: 5.0,
      reviews: 48,
      stock: 12,
      badge: "⭐ 360° PRO CHOICE",
      description: activeGear.description,
    };

    addToCart(matchedProduct);
    setCartAdded(true);

    // Trigger achievement for exploring & adding from 360 studio
    triggerAchievement({
      title: "🎉 360° Studio Explorer!",
      points: 500,
      subtitle: "🏆 You earned 500 GIGA Points for interactive gear inspection!",
      badge: "PRO STUDIO EXPLORER",
    });

    setTimeout(() => setCartAdded(false), 2500);
  };

  return (
    <main className="gear-360-page">
      {/* =========================================================
          HERO BANNER
          ========================================================= */}
      <section className="gear-360-hero">
        <div className="container text-center">
          <div className="hero-pill-badge">
            <FaSync className="spin-icon" /> 360° PRO SPORTS STUDIO & INTERACTIVE DEMO
          </div>
          <h1 className="gear-360-title">
            Interactive <span>3D & 360°</span> Gear Arena
          </h1>
          <p className="gear-360-subtitle">
            Rotate bats, inspect glove palms, orbit helmets, flex running shoes, spin match balls, and explore bag compartments with professional tournament inspection controls.
          </p>
        </div>
      </section>

      {/* =========================================================
          GEAR SELECTOR TABS (All 8 Categories)
          ========================================================= */}
      <section className="container py-3">
        <div className="gear-nav-scroll-bar">
          {GEAR_ITEMS.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`gear-nav-btn ${selectedGearId === item.id ? "active" : ""}`}
              onClick={() => {
                setSelectedGearId(item.id);
                setActiveHotspot(null);
                setIsActionDemoActive(false);
                setRotationAngle(0);
              }}
            >
              <span className="gear-btn-icon">{item.icon}</span>
              <div className="gear-btn-text">
                <strong>{item.categoryName}</strong>
                <small>{item.badge}</small>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================
          MAIN INTERACTIVE STUDIO ARENA
          ========================================================= */}
      <section className="container py-4">
        <div className="studio-main-card">
          {/* Header Info */}
          <div className="studio-card-header">
            <div className="header-info-left">
              <span className="live-demo-badge">
                <FaBolt /> {activeGear.badge}
              </span>
              <h2>{activeGear.name}</h2>
              <p className="gear-tagline-text">{activeGear.tagline}</p>
            </div>

            <div className="header-pricing-right">
              <span className="price-tag-lbl">Official Match Price</span>
              <strong className="studio-price-val">
                Rs. {activeGear.price.toLocaleString()}
              </strong>
            </div>
          </div>

          <div className="row g-4 align-items-center">
            {/* 360° TURNTABLE VIEWPORT (Left Column) */}
            <div className="col-lg-7">
              <div
                className={`turntable-stage ${isActionDemoActive ? `mode-${activeGear.demoType}` : ""}`}
                ref={turntableRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* 360 Degree HUD Overlay */}
                <div className="hud-degree-meter">
                  <FaSync className="hud-rotate-icon" />
                  <span>{Math.round(rotationAngle)}° ORBIT</span>
                </div>

                {/* Drag Prompt */}
                <div className="hud-drag-hint">
                  <FaSlidersH /> Drag horizontally to rotate 360°
                </div>

                {/* Turntable Floor Glow Grid */}
                <div className="turntable-floor-grid" />
                <div className="turntable-halo-glow" />

                {/* 3D Transform Product Wrapper */}
                <div
                  className="product-3d-model-wrapper"
                  style={{
                    transform: isActionDemoActive
                      ? undefined
                      : `perspective(1000px) rotateY(${rotationAngle}deg) scale(${
                          activeGear.demoType === "closeup" && isActionDemoActive ? 1.45 : 1
                        })`,
                  }}
                >
                  <img
                    src={activeGear.image}
                    alt={activeGear.name}
                    className={`model-image ${isActionDemoActive ? `action-${activeGear.demoType}` : ""}`}
                    draggable={false}
                  />

                  {/* Hotspots layer (visible when not in heavy action demo) */}
                  {!isActionDemoActive &&
                    activeGear.hotspots.map((hs) => (
                      <button
                        type="button"
                        key={hs.id}
                        className={`hotspot-marker ${activeHotspot?.id === hs.id ? "active" : ""}`}
                        style={{
                          left: `${hs.x}%`,
                          top: `${hs.y}%`,
                          transform: `translate(-50%, -50%) rotateY(${-rotationAngle}deg)`,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(activeHotspot?.id === hs.id ? null : hs);
                        }}
                        title={hs.title}
                        aria-label={hs.title}
                      >
                        <span className="hotspot-pulse" />
                        <span className="hotspot-dot">i</span>
                      </button>
                    ))}
                </div>

                {/* Interactive Hotspot Tooltip Popup */}
                {activeHotspot && (
                  <div className="hotspot-info-card">
                    <div className="hotspot-card-title">
                      <FaInfoCircle className="info-icon" />
                      <strong>{activeHotspot.title}</strong>
                    </div>
                    <p>{activeHotspot.description}</p>
                    <button
                      type="button"
                      className="hotspot-close-btn"
                      onClick={() => setActiveHotspot(null)}
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>

              {/* STUDIO CONTROL TOOLBAR */}
              <div className="studio-controls-bar">
                <button
                  type="button"
                  className={`ctrl-btn ${isAutoSpin ? "active" : ""}`}
                  onClick={() => setIsAutoSpin(!isAutoSpin)}
                >
                  {isAutoSpin ? <FaPause /> : <FaPlay />}
                  <span>{isAutoSpin ? "Pause 360° Auto-Spin" : "Play 360° Auto-Spin"}</span>
                </button>

                <button
                  type="button"
                  className={`ctrl-btn action-mode-btn ${isActionDemoActive ? "active" : ""}`}
                  onClick={() => setIsActionDemoActive(!isActionDemoActive)}
                >
                  {activeGear.demoType === "flex" && <FaBolt />}
                  {activeGear.demoType === "compartments" && <FaEye />}
                  {activeGear.demoType === "spin" && <FaSync />}
                  {activeGear.demoType === "workout" && <FaBolt />}
                  {activeGear.demoType === "closeup" && <FaSearchPlus />}
                  {activeGear.demoType === "rotate" && <FaSync />}
                  <span>
                    {isActionDemoActive ? `Stop ${activeGear.demoLabel}` : `Demonstrate: ${activeGear.demoLabel}`}
                  </span>
                </button>

                <div className="angle-slider-wrap">
                  <span className="slider-lbl">Manual:</span>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={Math.round(rotationAngle)}
                    onChange={(e) => {
                      setIsAutoSpin(false);
                      setRotationAngle(Number(e.target.value));
                    }}
                    className="studio-slider"
                  />
                </div>
              </div>
            </div>

            {/* GEAR SPECIFICATIONS & ADD TO CART (Right Column) */}
            <div className="col-lg-5">
              <div className="gear-details-panel">
                <div className="panel-badge-row">
                  <span className="panel-cat-pill">{activeGear.categoryName}</span>
                  <span className="panel-tour-pill">✓ Tournament Grade</span>
                </div>

                <h3 className="panel-gear-title">{activeGear.name}</h3>
                <p className="panel-desc">{activeGear.description}</p>

                {/* Technical Specs List */}
                <div className="tech-specs-box">
                  <h4>🔍 Pro Technical Specifications</h4>
                  <div className="specs-grid">
                    {activeGear.specs.map((spec, sIdx) => (
                      <div className="spec-item" key={sIdx}>
                        <span className="spec-label">{spec.label}</span>
                        <strong className="spec-val">{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotspot Guide Checklist */}
                <div className="hotspot-checklist-box">
                  <span className="checklist-heading">🎯 Clickable 360° Inspection Hotspots:</span>
                  <div className="hotspot-pills-list">
                    {activeGear.hotspots.map((hs) => (
                      <button
                        type="button"
                        key={hs.id}
                        className={`hs-pill-btn ${activeHotspot?.id === hs.id ? "active" : ""}`}
                        onClick={() => setActiveHotspot(hs)}
                      >
                        <FaCheck className="hs-check" />
                        <span>{hs.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="panel-actions-row">
                  <button
                    type="button"
                    className={`btn-add-showcase-cart ${cartAdded ? "added" : ""}`}
                    onClick={handleAddCurrentToCart}
                  >
                    {cartAdded ? (
                      <>
                        <FaCheck /> Added to Cart (+500 PTS)!
                      </>
                    ) : (
                      <>
                        <FaShoppingCart /> Buy This Inspected Gear (Rs. {activeGear.price.toLocaleString()})
                      </>
                    )}
                  </button>

                  <Link to={`/products/${activeGear.productId}`} className="btn-view-product-page">
                    Full Product Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS SUMMARY ROW
          ========================================================= */}
      <section className="container py-4">
        <div className="studio-features-row">
          <div className="feature-box">
            <span className="f-icon">🔬</span>
            <div>
              <h4>High-Precision Inspection</h4>
              <p>Zoom into genuine grain patterns, seams, and materials before tournament purchase.</p>
            </div>
          </div>

          <div className="feature-box">
            <span className="f-icon">🏆</span>
            <div>
              <h4>Earn 500 GIGA Points</h4>
              <p>Interact and explore gear in the 360° Studio to unlock exclusive athlete rewards.</p>
            </div>
          </div>

          <div className="feature-box">
            <span className="f-icon">⚡</span>
            <div>
              <h4>100% Genuine Guaranteed</h4>
              <p>Direct factory certified match quality with official holographic serial numbers.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GearShowcase360;
