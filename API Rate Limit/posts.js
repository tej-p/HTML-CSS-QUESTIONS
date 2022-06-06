const posts = [
    {
      "id": 1,
      "user_id": 1,
      "title": "Pain in limb, hand, foot, fingers and toes",
      "post": "Pain in limb, hand, foot, fingers and toes"
    },
    {
      "id": 2,
      "user_id": 2,
      "title": "Partial placenta previa with hemorrhage, second trimester",
      "post": "Partial placenta previa with hemorrhage, second trimester"
    },
    {
      "id": 3,
      "user_id": 3,
      "title": "Burn of 2nd deg mul sites of left lower limb, except ank/ft",
      "post": "Burn of second degree of multiple sites of left lower limb, except ankle and foot"
    },
    {
      "id": 4,
      "user_id": 4,
      "title": "Corrosion of unspecified degree of right foot",
      "post": "Corrosion of unspecified degree of right foot"
    },
    {
      "id": 5,
      "user_id": 5,
      "title": "Poisoning by saline and osmotic laxtv, self-harm, sequela",
      "post": "Poisoning by saline and osmotic laxatives, intentional self-harm, sequela"
    },
    {
      "id": 6,
      "user_id": 6,
      "title": "Nondisp fx of neck of left radius, init for clos fx",
      "post": "Nondisplaced fracture of neck of left radius, initial encounter for closed fracture"
    },
    {
      "id": 7,
      "user_id": 7,
      "title": "Car passenger injured in collision w van nontraf, subs",
      "post": "Car passenger injured in collision with van in nontraffic accident, subsequent encounter"
    },
    {
      "id": 8,
      "user_id": 8,
      "title": "Argentous corneal deposits, left eye",
      "post": "Argentous corneal deposits, left eye"
    },
    {
      "id": 9,
      "user_id": 9,
      "title": "Postencephalitic parkinsonism",
      "post": "Postencephalitic parkinsonism"
    },
    {
      "id": 10,
      "user_id": 10,
      "title": "Dvtrcli of lg int w/o perforation or abscess w bleeding",
      "post": "Diverticulitis of large intestine without perforation or abscess with bleeding"
    },
    {
      "id": 11,
      "user_id": 11,
      "title": "Burn third deg of unsp site left lower limb, ex ank/ft, subs",
      "post": "Burn of third degree of unspecified site of left lower limb, except ankle and foot, subsequent encounter"
    },
    {
      "id": 12,
      "user_id": 12,
      "title": "Athscl nonaut bio bypass of extrm w intrmt claud, bi legs",
      "post": "Atherosclerosis of nonautologous biological bypass graft(s) of the extremities with intermittent claudication, bilateral legs"
    },
    {
      "id": 13,
      "user_id": 13,
      "title": "Open wound of hand",
      "post": "Open wound of hand"
    },
    {
      "id": 14,
      "user_id": 14,
      "title": "Corros 2nd deg mul left fingers (nail), not including thumb",
      "post": "Corrosion of second degree of multiple left fingers (nail), not including thumb"
    },
    {
      "id": 15,
      "user_id": 15,
      "title": "Other traumatic spondylolisthesis of third cervical vertebra",
      "post": "Other traumatic spondylolisthesis of third cervical vertebra"
    },
    {
      "id": 16,
      "user_id": 16,
      "title": "Nondisp Rolando's fracture, r hand, subs for fx w nonunion",
      "post": "Nondisplaced Rolando's fracture, right hand, subsequent encounter for fracture with nonunion"
    },
    {
      "id": 17,
      "user_id": 17,
      "title": "Burn second degree of unsp single finger (nail) except thumb",
      "post": "Burn of second degree of unspecified single finger (nail) except thumb"
    },
    {
      "id": 18,
      "user_id": 18,
      "title": "Displ pilon fx l tibia, 7thR",
      "post": "Displaced pilon fracture of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
    },
    {
      "id": 19,
      "user_id": 19,
      "title": "Nondisp fx of body of scapula, r shoulder, init for opn fx",
      "post": "Nondisplaced fracture of body of scapula, right shoulder, initial encounter for open fracture"
    },
    {
      "id": 20,
      "user_id": 20,
      "title": "Heart-lung transplant rejection",
      "post": "Heart-lung transplant rejection"
    },
    {
      "id": 21,
      "user_id": 21,
      "title": "(Induced) termination of pregnancy with unsp complications",
      "post": "(Induced) termination of pregnancy with unspecified complications"
    },
    {
      "id": 22,
      "user_id": 22,
      "title": "Displ pilon fx l tibia, 7thN",
      "post": "Displaced pilon fracture of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion"
    },
    {
      "id": 23,
      "user_id": 23,
      "title": "Unspecified retinal break, left eye",
      "post": "Unspecified retinal break, left eye"
    },
    {
      "id": 24,
      "user_id": 24,
      "title": "Oth ac & subac resp cond d/t chemicals, gas, fumes & vapors",
      "post": "Other acute and subacute respiratory conditions due to chemicals, gases, fumes and vapors"
    },
    {
      "id": 25,
      "user_id": 25,
      "title": "Paranoid schizophrenia",
      "post": "Paranoid schizophrenia"
    },
    {
      "id": 26,
      "user_id": 26,
      "title": "Occup of hv veh injured in collision w 2/3-whl mv in traf",
      "post": "Unspecified occupant of heavy transport vehicle injured in collision with two- or three-wheeled motor vehicle in traffic accident"
    },
    {
      "id": 27,
      "user_id": 27,
      "title": "Unsp pedal cyclist injured in collision w oth mv in traf",
      "post": "Unspecified pedal cyclist injured in collision with other motor vehicles in traffic accident"
    },
    {
      "id": 28,
      "user_id": 28,
      "title": "Contact with unspecified sharp object(s), sequela",
      "post": "Contact with unspecified sharp object(s), sequela"
    },
    {
      "id": 29,
      "user_id": 29,
      "title": "Inj flexor musc/fasc/tend l little finger at forarm lv, subs",
      "post": "Other injury of flexor muscle, fascia and tendon of left little finger at forearm level, subsequent encounter"
    },
    {
      "id": 30,
      "user_id": 30,
      "title": "Poisn by oth nonsteroid anti-inflam drugs, self-harm, init",
      "post": "Poisoning by other nonsteroidal anti-inflammatory drugs [NSAID], intentional self-harm, initial encounter"
    },
    {
      "id": 31,
      "user_id": 31,
      "title": "Subluxation of metacarpophalangeal joint of finger, sequela",
      "post": "Subluxation of metacarpophalangeal joint of other finger, sequela"
    },
    {
      "id": 32,
      "user_id": 32,
      "title": "Poisoning by other narcotics, assault",
      "post": "Poisoning by other narcotics, assault"
    },
    {
      "id": 33,
      "user_id": 33,
      "title": "Laceration with foreign body, right foot, subs encntr",
      "post": "Laceration with foreign body, right foot, subsequent encounter"
    },
    {
      "id": 34,
      "user_id": 34,
      "title": "Multiple fractures of ribs, left side, init for clos fx",
      "post": "Multiple fractures of ribs, left side, initial encounter for closed fracture"
    },
    {
      "id": 35,
      "user_id": 35,
      "title": "Mixed lesions of pinta",
      "post": "Mixed lesions of pinta"
    },
    {
      "id": 36,
      "user_id": 36,
      "title": "Unsp inj great saphenous at hip and thi lev, right leg, subs",
      "post": "Unspecified injury of greater saphenous vein at hip and thigh level, right leg, subsequent encounter"
    },
    {
      "id": 37,
      "user_id": 37,
      "title": "Colostomy malfunction",
      "post": "Colostomy malfunction"
    },
    {
      "id": 38,
      "user_id": 38,
      "title": "Path fx in oth disease, r ulna, subs for fx w routn heal",
      "post": "Pathological fracture in other disease, right ulna, subsequent encounter for fracture with routine healing"
    },
    {
      "id": 39,
      "user_id": 39,
      "title": "Nondisp commnt fx shaft of rad, unsp arm, 7thK",
      "post": "Nondisplaced comminuted fracture of shaft of radius, unspecified arm, subsequent encounter for closed fracture with nonunion"
    },
    {
      "id": 40,
      "user_id": 40,
      "title": "Nondisp seg fx shaft of ulna, r arm, 7thH",
      "post": "Nondisplaced segmental fracture of shaft of ulna, right arm, subsequent encounter for open fracture type I or II with delayed healing"
    },
    {
      "id": 41,
      "user_id": 41,
      "title": "Periprosth osteolysis of internal prosthetic l hip jt, subs",
      "post": "Periprosthetic osteolysis of internal prosthetic left hip joint, subsequent encounter"
    },
    {
      "id": 42,
      "user_id": 42,
      "title": "Displ transverse fx r patella, 7thE",
      "post": "Displaced transverse fracture of right patella, subsequent encounter for open fracture type I or II with routine healing"
    },
    {
      "id": 43,
      "user_id": 43,
      "title": "Corrosions of left ear drum, subsequent encounter",
      "post": "Corrosions of left ear drum, subsequent encounter"
    },
    {
      "id": 44,
      "user_id": 44,
      "title": "Chronic salpingitis and oophoritis",
      "post": "Chronic salpingitis and oophoritis"
    },
    {
      "id": 45,
      "user_id": 45,
      "title": "Wedge compression fracture of third lumbar vertebra, init",
      "post": "Wedge compression fracture of third lumbar vertebra, initial encounter for closed fracture"
    },
    {
      "id": 46,
      "user_id": 46,
      "title": "Inj unsp musc/fasc/tend at wrs/hnd lv, right hand, subs",
      "post": "Other injury of unspecified muscle, fascia and tendon at wrist and hand level, right hand, subsequent encounter"
    },
    {
      "id": 47,
      "user_id": 47,
      "title": "Bitten by dolphin, initial encounter",
      "post": "Bitten by dolphin, initial encounter"
    },
    {
      "id": 48,
      "user_id": 48,
      "title": "Adverse effect of antihyperlipidemic and antiarterio drugs",
      "post": "Adverse effect of antihyperlipidemic and antiarteriosclerotic drugs"
    },
    {
      "id": 49,
      "user_id": 49,
      "title": "Sltr-haris Type IV physeal fx left metatarsal, sequela",
      "post": "Salter-Harris Type IV physeal fracture of left metatarsal, sequela"
    },
    {
      "id": 50,
      "user_id": 50,
      "title": "Swan-neck deformity of left finger(s)",
      "post": "Swan-neck deformity of left finger(s)"
    },
    {
      "id": 51,
      "user_id": 51,
      "title": "Oth war operations occurring after, military personnel",
      "post": "Other war operations occurring after cessation of hostilities, military personnel"
    },
    {
      "id": 52,
      "user_id": 52,
      "title": "Other superficial bite of left foot, initial encounter",
      "post": "Other superficial bite of left foot, initial encounter"
    },
    {
      "id": 53,
      "user_id": 53,
      "title": "Pathological fracture, right tibia, init encntr for fracture",
      "post": "Pathological fracture, right tibia, initial encounter for fracture"
    },
    {
      "id": 54,
      "user_id": 54,
      "title": "Contusion of diaphragm, initial encounter",
      "post": "Contusion of diaphragm, initial encounter"
    },
    {
      "id": 55,
      "user_id": 55,
      "title": "Laceration without foreign body of thumb with damage to nail",
      "post": "Laceration without foreign body of thumb with damage to nail"
    },
    {
      "id": 56,
      "user_id": 56,
      "title": "Complex regional pain syndrome I of lower limb",
      "post": "Complex regional pain syndrome I of lower limb"
    },
    {
      "id": 57,
      "user_id": 57,
      "title": "Ileostomy status",
      "post": "Ileostomy status"
    },
    {
      "id": 58,
      "user_id": 58,
      "title": "Inj oth flexor musc/fasc/tend at forarm lv, left arm, sqla",
      "post": "Other injury of other flexor muscle, fascia and tendon at forearm level, left arm, sequela"
    },
    {
      "id": 59,
      "user_id": 59,
      "title": "Lacerat unsp blood vessel at wrs/hnd lv of unsp arm, init",
      "post": "Laceration of unspecified blood vessel at wrist and hand level of unspecified arm, initial encounter"
    },
    {
      "id": 60,
      "user_id": 60,
      "title": "Inj great saphenous at lower leg level, right leg, init",
      "post": "Other specified injury of greater saphenous vein at lower leg level, right leg, initial encounter"
    },
    {
      "id": 61,
      "user_id": 61,
      "title": "Type 2 diabetes with mild nonp rtnop with macular edema, bi",
      "post": "Type 2 diabetes mellitus with mild nonproliferative diabetic retinopathy with macular edema, bilateral"
    },
    {
      "id": 62,
      "user_id": 62,
      "title": "Fracture of foot and toe, except ankle",
      "post": "Fracture of foot and toe, except ankle"
    },
    {
      "id": 63,
      "user_id": 63,
      "title": "Nondisp fx of low epiphy (separation) of unsp femr, 7thB",
      "post": "Nondisplaced fracture of lower epiphysis (separation) of unspecified femur, initial encounter for open fracture type I or II"
    },
    {
      "id": 64,
      "user_id": 64,
      "title": "Acute toxic conjunctivitis, right eye",
      "post": "Acute toxic conjunctivitis, right eye"
    },
    {
      "id": 65,
      "user_id": 65,
      "title": "Subluxation of unsp parts of right shoulder girdle, subs",
      "post": "Subluxation of unspecified parts of right shoulder girdle, subsequent encounter"
    },
    {
      "id": 66,
      "user_id": 66,
      "title": "Personal history of other venous thrombosis and embolism",
      "post": "Personal history of other venous thrombosis and embolism"
    },
    {
      "id": 67,
      "user_id": 67,
      "title": "Hallervorden-Spatz disease",
      "post": "Hallervorden-Spatz disease"
    },
    {
      "id": 68,
      "user_id": 68,
      "title": "Lac w/o fb of low back and pelv w/o penet retroperiton, init",
      "post": "Laceration without foreign body of lower back and pelvis without penetration into retroperitoneum, initial encounter"
    },
    {
      "id": 69,
      "user_id": 69,
      "title": "Unsp fx upr end r rad, 7thR",
      "post": "Unspecified fracture of upper end of right radius, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion"
    },
    {
      "id": 70,
      "user_id": 70,
      "title": "Strain of musc/fasc/tend at forearm level, unsp arm",
      "post": "Strain of other muscles, fascia and tendons at forearm level, unspecified arm"
    },
    {
      "id": 71,
      "user_id": 71,
      "title": "Other malabsorption due to intolerance",
      "post": "Other malabsorption due to intolerance"
    },
    {
      "id": 72,
      "user_id": 72,
      "title": "Minor laceration of left vertebral artery, sequela",
      "post": "Minor laceration of left vertebral artery, sequela"
    },
    {
      "id": 73,
      "user_id": 73,
      "title": "Puncture wound with foreign body of knee",
      "post": "Puncture wound with foreign body of knee"
    },
    {
      "id": 74,
      "user_id": 74,
      "title": "Oth fx fourth lum vertebra, subs for fx w delay heal",
      "post": "Other fracture of fourth lumbar vertebra, subsequent encounter for fracture with delayed healing"
    },
    {
      "id": 75,
      "user_id": 75,
      "title": "External constriction of unspecified ear",
      "post": "External constriction of unspecified ear"
    },
    {
      "id": 76,
      "user_id": 76,
      "title": "Adverse effect of methadone",
      "post": "Adverse effect of methadone"
    },
    {
      "id": 77,
      "user_id": 77,
      "title": "Laceration w/o foreign body of unsp cheek and TMJ area",
      "post": "Laceration without foreign body of unspecified cheek and temporomandibular area"
    },
    {
      "id": 78,
      "user_id": 78,
      "title": "Acute embolism and thombos of superfic veins of l up extrem",
      "post": "Acute embolism and thrombosis of superficial veins of left upper extremity"
    },
    {
      "id": 79,
      "user_id": 79,
      "title": "Melkersson's syndrome",
      "post": "Melkersson's syndrome"
    },
    {
      "id": 80,
      "user_id": 80,
      "title": "Glaucoma secondary to eye inflam, unsp eye, moderate stage",
      "post": "Glaucoma secondary to eye inflammation, unspecified eye, moderate stage"
    },
    {
      "id": 81,
      "user_id": 81,
      "title": "Burn of unsp degree of head, face, and neck, unsp site",
      "post": "Burn of unspecified degree of head, face, and neck, unspecified site"
    },
    {
      "id": 82,
      "user_id": 82,
      "title": "Strain of flexor musc/fasc/tend at forearm level, unsp arm",
      "post": "Strain of other flexor muscle, fascia and tendon at forearm level, unspecified arm"
    },
    {
      "id": 83,
      "user_id": 83,
      "title": "Laceration of musc/fasc/tend prt biceps, unsp arm",
      "post": "Laceration of muscle, fascia and tendon of other parts of biceps, unspecified arm"
    },
    {
      "id": 84,
      "user_id": 84,
      "title": "Burns of 10-19% of body surfc w 0% to 9% third degree burns",
      "post": "Burns involving 10-19% of body surface with 0% to 9% third degree burns"
    },
    {
      "id": 85,
      "user_id": 85,
      "title": "Mech compl of other urinary catheter, subsequent encounter",
      "post": "Other mechanical complication of other urinary catheter, subsequent encounter"
    },
    {
      "id": 86,
      "user_id": 86,
      "title": "Other postprocedural cardiac functional disturbances",
      "post": "Other postprocedural cardiac functional disturbances"
    },
    {
      "id": 87,
      "user_id": 87,
      "title": "Other acquired deformity of head",
      "post": "Other acquired deformity of head"
    },
    {
      "id": 88,
      "user_id": 88,
      "title": "Sublux of unsp interphaln joint of r little finger, subs",
      "post": "Subluxation of unspecified interphalangeal joint of right little finger, subsequent encounter"
    },
    {
      "id": 89,
      "user_id": 89,
      "title": "Unspecified fracture of facial bones",
      "post": "Unspecified fracture of facial bones"
    },
    {
      "id": 90,
      "user_id": 90,
      "title": "Displacement of internal prosth dev/grft",
      "post": "Displacement of other specified internal prosthetic devices, implants and grafts"
    },
    {
      "id": 91,
      "user_id": 91,
      "title": "Oth fx low end unsp femr, 7thH",
      "post": "Other fracture of lower end of unspecified femur, subsequent encounter for open fracture type I or II with delayed healing"
    },
    {
      "id": 92,
      "user_id": 92,
      "title": "Lateral disloc of proximal end of tibia, right knee, init",
      "post": "Lateral dislocation of proximal end of tibia, right knee, initial encounter"
    },
    {
      "id": 93,
      "user_id": 93,
      "title": "Pauciarticular juvenile rheumatoid arthritis, left knee",
      "post": "Pauciarticular juvenile rheumatoid arthritis, left knee"
    },
    {
      "id": 94,
      "user_id": 94,
      "title": "Disp fx of base of fifth MC bone, r hand, init for opn fx",
      "post": "Displaced fracture of base of fifth metacarpal bone, right hand, initial encounter for open fracture"
    },
    {
      "id": 95,
      "user_id": 95,
      "title": "Snowboard accident",
      "post": "Snowboard accident"
    },
    {
      "id": 96,
      "user_id": 96,
      "title": "Crushing injury of larynx and trachea, subsequent encounter",
      "post": "Crushing injury of larynx and trachea, subsequent encounter"
    },
    {
      "id": 97,
      "user_id": 97,
      "title": "Traum rupt of collat ligmt of r mid fngr at MCP/IP jt, subs",
      "post": "Traumatic rupture of collateral ligament of right middle finger at metacarpophalangeal and interphalangeal joint, subsequent encounter"
    },
    {
      "id": 98,
      "user_id": 98,
      "title": "Unspecified acute inflammation of orbit",
      "post": "Unspecified acute inflammation of orbit"
    },
    {
      "id": 99,
      "user_id": 99,
      "title": "Encounter for screening for oth suspected endocrine disorder",
      "post": "Encounter for screening for other suspected endocrine disorder"
    },
    {
      "id": 100,
      "user_id": 100,
      "title": "Fear of injections and transfusions",
      "post": "Fear of injections and transfusions"
    }
]
  

module.exports = posts;