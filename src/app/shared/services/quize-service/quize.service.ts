import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor() { }

  private quizQuestions: any[] = [
    {
      "question": "Acetone is mainly used in which of the industries?",
      "options": [
        "Construction, Paints, IAP, and Polymers",
        "Construction, Paint, Polymers, and Agriculture",
        "Oilfield, Cosmetics, Textile, and Paint",
        "Cosmetics, Paints, Textile and Polymers"
      ],
      "correctAnswer": "Cosmetics, Paints, Textile and Polymers"
    },
    {
      "question": "Acetone is used in IAP for what?",
      "options": [
        "Textile",
        "Agriculture",
        "Adhesive",
        "abhesive"
      ],
      "correctAnswer": "Adhesive"
    },
    {
      "question": "IPA is a chemical used in Pharma for?",
      "options": [
        "NC Solution",
        "Flexible Packaging",
        "Disinfectants",
        "Adhesives"
      ],
      "correctAnswer": "Flexible Packaging"
    },
    {
      "question": "Common names of paraffin oil are",
      "options": [
        "Oil bulk",
        "White Oil",
        "Bulk Oil",
        "Oil Mineral"
      ],
      "correctAnswer": "Bulk Oil"
    },
    {
      "question": "Paraffin brands are",
      "options": [
        "Fanama and Apar",
        "Panama and Ghandar",
        "Panama and Power Oil",
        "All of the Above"
      ],
      "correctAnswer": "All of the Above"
    },
    {
      "question": "Nagode competitors in the market are",
      "options": [
        "Chander",
        "Apar",
        "Samking",
        "MNC"
      ],
      "correctAnswer": "Samking"
    },
    {
      "question": "Cetyl Alcohol is packed in?",
      "options": [
        "25kg Carton",
        "25kg Bag",
        "Carton",
        "Bag"
      ],
      "correctAnswer": "25kg Bag"
    },
    {
      "question": "Glycerine is preferred in which of the pack size?",
      "options": [
        "230kg",
        "270kg",
        "220kg",
        "250kg"
      ],
      "correctAnswer": "250kg"
    },
    {
      "question": "What are the competing brands in the market for Spray Polyol?",
      "options": [
        "Panama and BASF",
        "Sasol and Dow",
        "Unid and BASF",
        "Dow and BASF"
      ],
      "correctAnswer": "Dow and BASF"
    },
    {
      "question": "What is the customer segment where EPXY is used?",
      "options": [
        "Supplier",
        "MNC",
        "Applicator",
        "None of the above"
      ],
      "correctAnswer": "Applicator"
    },
    {
      "question": "What is the common names for waterstop?",
      "options": [
        "Waterstop",
        "Water bar",
        "Water",
        "None of the above"
      ],
      "correctAnswer": "Water bar"
    },
    {
      "question": "Driveline Oils additives has another common name called?",
      "options": [
        "Gear Oil additives",
        "TBN Boosters",
        "Base Oil",
        "Greases"
      ],
      "correctAnswer": "Gear Oil additives"
    },
    {
      "question": "What is the Generic product name for MEG and DEG?",
      "options": [
        "Solvent",
        "Additives",
        "Base Oil",
        "Polymer"
      ],
      "correctAnswer": "Solvent"
    },
    {
      "question": "DEG is under which division?",
      "options": [
        "Oilfield",
        "Paint",
        "Construction",
        "A and B"
      ],
      "correctAnswer": "Oilfield"
    },
    // {
    //   "question": "Spell the full name of MEG?",
    //   "options": [
    //     "Mono Ethylene Glycols",
    //     "monos Ethylene Glycols",
    //     "Mono Ethylene Glycol"
    //   ],
    //   "correctAnswer": "Mono Ethylene Glycols"
    // },
    {
      "question": "What is the generic product name for Ethanol?",
      "options": [
        "Ethanol",
        "Ethanol (Imported)",
        "Alcohol",
        "Alcohol (Local)"
      ],
      "correctAnswer": "Alcohol"
    },
    {
      "question": "Ethanol is mostly preferred from which origin?",
      "options": [
        "China",
        "USA",
        "Europe",
        "Brazil"
      ],
      "correctAnswer": "Brazil"
    },
    {
      "question": "Bleaching earth has a common name called?",
      "options": [
        "Activated carbon",
        "Activated charcoal",
        "Activated Clay",
        "All of the above"
      ],
      "correctAnswer": "Activated clay"
    },
    {
      "question": "In the Nigeria market who are our major competitors for Bleaching Earth?",
      "options": [
        "Unique Chemical",
        "Legacy foods",
        "Samking",
        "Regatta"
      ],
      "correctAnswer": "Legacy foods"
    },
    {
      "question": "What is the appearance material of Citric Acid?",
      "options": [
        "Liquid",
        "Liquid/Powder",
        "Powder",
        "All of the above"
      ],
      "correctAnswer": "Powder"
    },
    {
      "question": "Most important and preferred technical specs of Corn Starch is?",
      "options": [
        "PB",
        "UPS",
        "BP, USP",
        "PSU, PB"
      ],
      "correctAnswer": "BP, USP"
    },
    {
      "question": "Dextrose Monohydrate is under which division?",
      "options": [
        "Cosmetics",
        "Food",
        "Trade",
        "Cosmetics and Trade"
      ],
      "correctAnswer": "Food"
    },
    {
      "question": "Aluminium foil is mostly preferred in what brand?",
      "options": [
        "Any brand",
        "China",
        "India",
        "Brazil"
      ],
      "correctAnswer": "Any brand"
    },
    {
      "question": "Which is a competing brand of Ethanol?",
      "options": [
        "China and USA",
        "Turkey and UAE",
        "India and South Africa",
        "Thailand and China"
      ],
      "correctAnswer": "India and South Africa"
    },
    {
      "question": "IPEA is used in cosmetics industry for?",
      "options":
        [
          "Acrylic nails",
          "Thinner",
          "Hand lotion",
          "Shampoo"
        ],
      "correctAnswer": "Hand lotion"
    },
    {
      "question": "MIBK is used in which of this industry?",
      "options": [
        "Construction",
        "Cosmetics",
        "Oilfield",
        "Polymers"
      ],
      "correctAnswer": "Polymers"
    },
    {
      "question": "DL-Methione and L-Lysine is under which feed?",
      "options": [
        "Human feed",
        "Animal feed",
        "Medical feed",
        "Cow feed"
      ],
      "correctAnswer": "Animal feed"
    },
    {
      "question": "N-butanol is used in IAP as what?",
      "options": [
        "For coatings",
        "For Waxes",
        "For Nylon",
        "None of the above"
      ],
      "correctAnswer": "For Nylon"
    },
    {
      "question": "MIBK as a solvent is used in pharma for?",
      "options": [
        "Sanitizers",
        "Hand lotion",
        "Drugs",
        "All of the above"
      ],
      "correctAnswer": "Drugs"
    },
    {
      "question": "Xylene is a solvent for epoxy resin in construction",
      "options": [
        "True",
        "False",
        "Partly true",
        "Neither true nor false"
      ],
      "correctAnswer": "True"
    },
    {
      "question": "Hydrated Lime has what appearance of material",
      "options": [
        "Liquid",
        "Powder",
        "A and B",
        "All of the above"
      ],
      "correctAnswer": "Powder"
    },
    {
      "question": "HTH is common name for?",
      "options": [
        "Calcium Hypochlorite",
        "Calcium Carbonate",
        "Calcium Propionate",
        "Calcium Chlorite"
      ],
      "correctAnswer": "Calcium Hypochlorite"
    },
    {
      "question": "Sodium hydrosulphite is used in which industry",
      "options": [
        "Paint",
        "Cosmetics",
        "Textile",
        "Construction"
      ],
      "correctAnswer": "Textile"
    },
    {
      "question": "Hydrogen Peroxide is what agent of choice",
      "options": [
        "Cleaning",
        "Bleaching",
        "Manufacturing",
        "A and B"
      ],
      "correctAnswer": "Bleaching"
    },
    // {
    //   "question": "What is the generic product name for Caustic Soda is",
    //   "options": [
    //     "Sodium Hydroxide",
    //     "Sodium sulphate",
    //     "Sodium Chloride",
    //     "Sodium Hypochlorite"
    //   ],
    //   "correctAnswer": "Sodium Hydroxide"
    // },
    {
      "question": "Zeolite is preferred in what pack size?",
      "options": [
        "25kg bag",
        "25kg Carton",
        "Jumbo Bag",
        "A and C"
      ],
      "correctAnswer": "Jumbo Bag"
    },
    {
      "question": "What is the Hexane brand in our range?",
      "options": [
        "Hexane/Thailand",
        "Hexane/India",
        "Hexane/China"
      ],
      "correctAnswer": "Hexane/Thailand"
    },
    {
      "question": "38. What are our brand range of bleaching earth?",
      "options": [
        "Bleaching earth (Pure Flo B-80)",
        "Bleaching earth (Perform 4000)",
        "Bleaching earth Perform 4000 and Pure Flo B-50",
        "D. A and B"
      ],
      "correctAnswer": "A and B"
    },
    {
      "question": "Who are our main competitors for Formic Acid?",
      "options": [
        "Parco and Multichem",
        "Multichem and Samking",
        "Unique Chemical and Multichem",
        "Regatta and Multichem"
      ],
      "correctAnswer": "Parco and Multichem"
    },
    {
      "question": "Yellow flakes have a generic product name called?",
      "options": [
        "Sodium Hydroxide(10PPM)",
        "Sodium Chloride(10PPM)",
        "Sodium Sulphide(10PPM)",
        "Sodium Hypochlorite 10PPM)"
      ],
      "correctAnswer": "Sodium Sulphide(10PPM)"
    },
    {
      "question": "Basic Chrome has a generic product name called?",
      "options": [
        "Basic Chrome Sulphate",
        "Basic Chrome Sulphide",
        "Basic Chrome Chloride",
        "Basic chrome Sulfate"
      ],
      "correctAnswer": "Basic Chrome Sulfate"
    },
    {
      "question": "The customer segment where Soda Ash Dense is used is?",
      "options": [
        "Leather industry",
        "Textile Industry",
        "Glass industry",
        "Polymer industry"
      ],
      "correctAnswer": "Glass industry"
    },
    {
      "question": "Formic Acid is used as what agent?",
      "options": [
        "Bleaching",
        "Cleaning",
        "Preservative",
        "Washing"
      ],
      "correctAnswer": "Preservative"
    },
    {
      "question": "Sodium Carbonate is the common name for which chemical?",
      "options": [
        "Soda Ash Light",
        "Zeolite",
        "Soda Ash Dense",
        "Formic Acid"
      ],
      "correctAnswer": "Soda Ash Dense"
    },
    {
          "question": "What is the common name for Waterproof Membrane?",
          "options": [
            "Butumen Felt",
            "Bitumen Felt",
            "Bitushape",
            "Bitunal"
          ],
          "correctAnswer": "Bitumen Felt"
        },
        {
          "question": "Bitumen is used in which of the following industries?",
          "options": [
            "Construction",
            "Roads",
            "Waterproofing",
            "All of the above"
          ],
          "correctAnswer": "All of the above"
        },
        {
          "question": "Spell the full name of MEG?",
          "options": [
            "Mono Ethyleme Glycol",
            "Mono Etylane Glycel",
            "Mono Ethylene Glycols",
            "None of the above"
          ],
          "correctAnswer": "Mono Ethylene Glycols"
        },
        {
          "question": "The following are galaxies brands in our range?",
          "options": [
            "CAPB and Allantoin",
            "CAPB and LABSA",
            "CAPB and CDEA",
            "CDEA and Allantoin"
          ],
          "correctAnswer": "CARPB and CDEA"
        },
        {
          "question": "What is the generic product name for Bitumen?",
          "options": [
            "Bitumen",
            "Asphalt",
            "Petroleum"
          ],
          "correctAnswer": "Bitumen"
        },
        // {
        //   "question": "Spell MPG",
        //   "options": [
        //     "Mono Propylene Glycol",
        //     "Mono Propylane Glycel",
        //     "Mono Propane Glycel",
        //     "Mono Propain Glycol"
        //   ],
        //   "correctAnswer": "Mono Propylene Glycol"
        // },
        {
          "question": "Texapon is a common name for?",
          "options": [
            "SLS",
            "SLLS",
            "SLES",
            "SLTS"
          ],
          "correctAnswer": "SLES"
        },
        {
          "question": "Spell SLS",
          "options": [
            "Sodium Lauryl Sulphate",
            "Sudium Lauryln Surphate",
            "Sodiun Laurly Sulphate"
          ],
          "correctAnswer": "Sodium Lauryl Sulphate"
        },
        {
          "question": "We sell Calcium Carbide in two ranges, Calcium Carbide 50/80 and?",
          "options": [
            "Calcium Carbide 40/50",
            "Calcium Carbide 30/50",
            "Calcium Carbide 25/50",
            "Calcium Carbide 23/50"

          ],
          "correctAnswer": "Calcium Carbide 25/50"
        }

        
  ]
    
    
  

  getQuestions(): any[] {
    return this.quizQuestions;
  }
}
