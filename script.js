// --- INITIAL DATA ---
const initialData = {
    'part-org': [
        // SUBPART GEN
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.100", req: "Scope", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.105", req: "Competent authority", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.110", req: "Responsibilities of the ground handling organisation", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.110(a)", req: "Responsibilities of the ground handling organisation", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.115", req: "Start of operation", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.120", req: "Means of compliance", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.120", req: "Means of compliance", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC2 ORGH.GEN.120", req: "Means of compliance", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.125", req: "Use of industry standards", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.125", req: "Use of industry standards", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC2 ORGH.GEN.125", req: "Use of industry standards", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.130", req: "Management of changes", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.140", req: "Access", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.145", req: "Provision of documentation for oversight purposes", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.150", req: "Findings and corrective actions", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.150", req: "Findings and corrective actions", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.155", req: "Immediate reaction to a safety problem and safety directives", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.160", req: "Reporting of safety-related occurrences", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.160(e)", req: "Reporting of safety-related occurrences", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.165", req: "Safety reporting system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "AMC", ref: "AMC1 ORGH.GEN.165", req: "Safety reporting system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GEN", type: "IR", ref: "ORGH.GEN.170", req: "Psychoactive substances and medicines", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART MGM
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.200", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(a)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(2)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC2 ORGH.MGM.200(b)(2)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC3 ORGH.MGM.200(b)(2)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(2)(i)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(2)(ii)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC2 ORGH.MGM.200(b)(2)(ii)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(2)(iii)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(2)(iv)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(b)(6)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.200(d)", req: "General requirements for the management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.201", req: "Information security management system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.205", req: "Contracted services or products", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.205", req: "Contracted services or products", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC2 ORGH.MGM.205", req: "Contracted services or products", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.210", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.210", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.210(c)", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC2 ORGH.MGM.210(c)", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.210(g)(1)", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.210(j)", req: "Personnel", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.215", req: "Facilities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "AMC", ref: "AMC1 ORGH.MGM.215", req: "Facilities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart MGM", type: "IR", ref: "ORGH.MGM.220", req: "Software used for the provision of ground handling services", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART DEC
        { subpart: "Subpart DEC", type: "IR", ref: "ORGH.DEC.100", req: "Declaration — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DEC", type: "AMC", ref: "AMC1 ORGH.DEC.100", req: "Declaration — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DEC", type: "IR", ref: "ORGH.DEC.105", req: "Termination of the provision of ground handling services", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DEC", type: "AMC", ref: "AMC1 ORGH.DEC.105", req: "Termination of the provision of ground handling services", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART DOC
        { subpart: "Subpart DOC", type: "IR", ref: "ORGH.DOC.100", req: "Documents and records systems", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DOC", type: "AMC", ref: "AMC1 ORGH.DOC.100", req: "Documents and records system", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DOC", type: "IR", ref: "ORGH.DOC.105", req: "Record-keeping", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DOC", type: "IR", ref: "ORGH.DOC.110", req: "Ground handling manual", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DOC", type: "AMC", ref: "AMC1 ORGH.DOC.110", req: "Ground handling manual", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart DOC", type: "AMC", ref: "AMC1 ORGH.DOC.110(a)", req: "Ground handling manual", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART TRG
        { subpart: "Subpart TRG", type: "IR", ref: "ORGH.TRG.100", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC2 ORGH.TRG.100", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC3 ORGH.TRG.100", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100(b)(3)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100(c)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC2 ORGH.TRG.100(c)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC3 ORGH.TRG.100(c)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC4 ORGH.TRG.100(c)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC5 ORGH.TRG.100(c)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100(d)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100(i)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC2 ORGH.TRG.100(i)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.100(j)", req: "Training and assessment programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "IR", ref: "ORGH.TRG.105", req: "Additional requirements related to training", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "IR", ref: "ORGH.TRG.110", req: "Dangerous goods training", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart TRG", type: "AMC", ref: "AMC1 ORGH.TRG.110(a)", req: "Dangerous goods training", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART GSE (Moved from OPS to ORG as per text ORGH.GSE)
        { subpart: "Subpart GSE", type: "IR", ref: "ORGH.GSE.100", req: "Ground support equipment — General requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GSE", type: "IR", ref: "ORGH.GSE.105", req: "Ground support equipment maintenance programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GSE", type: "AMC", ref: "AMC1 ORGH.GSE.105", req: "Ground support equipment maintenance programme", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart GSE", type: "IR", ref: "ORGH.GSE.110", req: "Ground support equipment pooling", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" }
    ],
    'part-ops': [
        // GENERAL
        { subpart: "General Requirements", type: "IR", ref: "GH.OPS.005", req: "General responsibilities for the provision of ground handling services", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "IR", ref: "GH.OPS.010", req: "Interfaces with other organisations", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "AMC", ref: "AMC1 GH.OPS.010", req: "Interfaces with other organisations", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "IR", ref: "GH.OPS.020", req: "Handling of dangerous goods", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "IR", ref: "GH.OPS.025", req: "Ground transportation of passengers and crew members by an aerodrome operator", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "IR", ref: "GH.OPS.030", req: "Common language", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "General Requirements", type: "AMC", ref: "AMC1 GH.OPS.030", req: "Common language", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART 1 - PASSENGER HANDLING
        { subpart: "Subpart 1 - Passenger Handling", type: "IR", ref: "GH.OPS.100", req: "Passenger handling — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 1 - Passenger Handling", type: "AMC", ref: "AMC1 GH.OPS.100", req: "Passenger handling — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 1 - Passenger Handling", type: "AMC", ref: "AMC2 GH.OPS.100", req: "Passenger handling — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 1 - Passenger Handling", type: "AMC", ref: "AMC1 GH.OPS.100(b)", req: "Passenger handling — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 1 - Passenger Handling", type: "IR", ref: "GH.OPS.105", req: "Control of passengers on the apron", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 1 - Passenger Handling", type: "IR", ref: "GH.OPS.110", req: "Handling of passengers with reduced mobility by an aerodrome operator", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART 2 - BAGGAGE HANDLING
        { subpart: "Subpart 2 - Baggage Handling", type: "IR", ref: "GH.OPS.200", req: "Baggage handling — general requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART 3 - AIRCRAFT SERVICING
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.300", req: "Safety on the apron", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.300(b)(3)", req: "Safety on the apron", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.305", req: "General requirements for the operation of ground support equipment", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.305", req: "General requirements for the operation of ground support equipment", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC2 GH.OPS.305", req: "General requirements for the operation of ground support equipment", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC3 GH.OPS.305", req: "General requirements for the operation of ground support equipment", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.305(b)", req: "General requirements for the operation of ground support equipment", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.310", req: "Aircraft refuelling and defuelling", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.310", req: "Aircraft refuelling and defuelling", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC2 GH.OPS.310", req: "Aircraft refuelling and defuelling", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.310(b)", req: "Aircraft refuelling and defuelling", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.320", req: "Potable water servicing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.320", req: "Potable water servicing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.325", req: "Aircraft toilet servicing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.330", req: "Aircraft exterior cleaning", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "IR", ref: "GH.OPS.335", req: "Aircraft de-icing and anti-icing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.335", req: "Aircraft de-icing and anti-icing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC2 GH.OPS.335", req: "Aircraft de-icing and anti-icing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC3 GH.OPS.335", req: "Aircraft de-icing and anti-icing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 3 - Aircraft Servicing", type: "AMC", ref: "AMC1 GH.OPS.335(a)", req: "Aircraft de-icing and anti-icing", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART 4 - AIRCRAFT TURNAROUND
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.400", req: "Coordination of aircraft turnaround activities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.400", req: "Coordination of aircraft turnaround activities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC2 GH.OPS.400", req: "Coordination of aircraft turnaround activities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.405", req: "Aircraft arrival", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.405", req: "Aircraft arrival", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.410", req: "Aircraft securing on the ground", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.415", req: "Aircraft loading and unloading", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.415", req: "Aircraft loading and unloading", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC2 GH.OPS.415", req: "Aircraft loading and unloading", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.420", req: "Loading supervision", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.420", req: "Loading supervision", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.425", req: "Unit load devices", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.430", req: "Aircraft departure activities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.430", req: "Aircraft departure activities", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.435", req: "Aircraft towing and pushback", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "AMC", ref: "AMC1 GH.OPS.435", req: "Aircraft towing and pushback", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 4 - Aircraft Turnaround", type: "IR", ref: "GH.OPS.440", req: "Communication and phraseology", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },

        // SUBPART 5 - CARGO AND MAIL HANDLING
        { subpart: "Subpart 5 - Cargo and Mail Handling", type: "IR", ref: "GH.OPS.500", req: "Cargo and mail handling — General requirements", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" },
        { subpart: "Subpart 5 - Cargo and Mail Handling", type: "IR", ref: "GH.OPS.505", req: "Handling of special cargo, other than dangerous goods", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" }
    ]
};

let appData = {};
let myChart = null;

// --- UI LOGIC ---
function closeModal() { document.getElementById('welcomeModal').style.display = 'none'; }

function toggleInstructions() {
    const c = document.getElementById('instructions-content');
    const a = document.getElementById('instruction-arrow');
    c.style.display = c.style.display === 'block' ? 'none' : 'block';
    a.innerText = c.style.display === 'block' ? '▲' : '▼';
}

window.onload = function() {
    const saved = localStorage.getItem('gapData_GH2025_v54');
    appData = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(initialData));
    
    if(appData['part-orgh']) { appData['part-org'] = appData['part-orgh']; delete appData['part-orgh']; }
    if(appData['part-ghops']) { appData['part-ops'] = appData['part-ghops']; delete appData['part-ghops']; }
    
    ['part-org', 'part-ops'].forEach(tab => renderTable(tab));
    updateDashboard();
    updateTabProgress();
    renderFollowupTable();
};

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab[onclick="switchTab('${tabId}')"]`).classList.add('active');
    
    if(tabId === 'follow-up') renderFollowupTable();
}

function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight + 2) + 'px';
}

function toggleHideCompleted(btn, tabKey) {
    const isActive = btn.classList.contains('active-filter');
    if(isActive) {
        btn.classList.remove('active-filter');
        btn.classList.remove('btn-green');
        btn.classList.add('btn-gray');
        btn.innerHTML = 'Skjul ferdig behandlet';
    } else {
        btn.classList.add('active-filter');
        btn.classList.remove('btn-gray');
        btn.classList.add('btn-green');
        btn.innerHTML = 'Vis alle';
    }
    filterTable(tabKey, document.getElementById(`search-${tabKey}`).value);
}

function setTypeFilter(tabKey, typeFilter, btn) {
    const container = document.getElementById(tabKey);
    // Reset active class on type buttons
    container.querySelectorAll('.btn-filter-type').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Store the filter value on the container for filterTable to use
    container.setAttribute('data-type-filter', typeFilter);
    
    filterTable(tabKey, container.querySelector('.search-bar').value);
}

function renderTable(tabKey) {
    const container = document.getElementById(tabKey);
    
    // --- 1. PRESERVE STATE BEFORE RE-RENDER ---
    const hideBtn = document.getElementById(`btn-hide-${tabKey}`);
    const isHideActive = hideBtn ? hideBtn.classList.contains('active-filter') : false;
    
    const searchInput = document.getElementById(`search-${tabKey}`);
    const searchValue = searchInput ? searchInput.value : '';

    // Preserve Type Filter
    let activeType = container.getAttribute('data-type-filter') || 'all';
    
    // Preserve Active Subpart
    const activeSubpartEl = container.querySelector('.subtab-container .btn-subtab.active');
    const activeSubpart = activeSubpartEl ? activeSubpartEl.innerText : 'Alle';


    // --- 2. GENERATE TOOLBAR HTML ---
    const subparts = [...new Set(appData[tabKey].map(i => i.subpart))].filter(Boolean);
    const subButtons = subparts.map(sp => {
        const isActive = (sp === activeSubpart) ? 'active' : '';
        return `<button class="btn btn-subtab ${isActive}" onclick="filterSubpart('${tabKey}', '${sp}', this)">${sp}</button>`;
    }).join('');
    
    const allSubpartActive = (activeSubpart === 'Alle') ? 'active' : '';

    // Type Buttons State
    const typeAllActive = activeType === 'all' ? 'active' : '';
    const typeIRActive = activeType === 'IR' ? 'active' : '';
    const typeAMCActive = activeType === 'AMC' ? 'active' : '';

    // Hide Button State
    const btnHideClass = isHideActive ? 'btn btn-green btn-small active-filter' : 'btn btn-gray btn-small';
    const btnHideText = isHideActive ? 'Vis alle' : 'Skjul ferdig behandlet';

    // Set Attribute back (it might be cleared when innerHTML changes if logic was different, good safety)
    container.setAttribute('data-type-filter', activeType);

    container.innerHTML = `
        <div class="toolbar">
            <div class="toolbar-row">
                <div class="subtab-container">
                    <button class="btn btn-subtab ${allSubpartActive}" onclick="filterSubpart('${tabKey}', 'all', this)">Alle</button>
                    ${subButtons}
                </div>
            </div>
            <div class="toolbar-row" style="border-top:1px solid #ddd; padding-top:8px;">
                <button class="btn-filter-type ${typeAllActive}" onclick="setTypeFilter('${tabKey}', 'all', this)">Alle typer</button>
                <button class="btn-filter-type ${typeIRActive}" onclick="setTypeFilter('${tabKey}', 'IR', this)">Vis bare IR</button>
                <button class="btn-filter-type ${typeAMCActive}" onclick="setTypeFilter('${tabKey}', 'AMC', this)">Vis bare AMC</button>
            </div>
            <div class="toolbar-row">
                <input type="text" class="search-bar" id="search-${tabKey}" placeholder="Søk (wildcard)..." value="${searchValue}" onkeyup="filterTable('${tabKey}', this.value)">
                <button class="${btnHideClass}" id="btn-hide-${tabKey}" onclick="toggleHideCompleted(this, '${tabKey}')">${btnHideText}</button>
            </div>
        </div>
        <table id="table-${tabKey}">
            <thead><tr><th>Lovkrav</th><th>Type</th><th>Kravtekst</th><th>Status</th><th>Nåværende Status</th><th>Ref Manual</th><th>Tiltak / Kommentar</th><th>Ansvarlig</th><th>Frist</th><th></th></tr></thead>
            <tbody></tbody>
        </table>
        <button class="btn btn-blue" style="margin-top:10px;" onclick="addRow('${tabKey}')">+ Legg til rad</button>
    `;

    const tbody = container.querySelector('tbody');
    appData[tabKey].forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.className = row.status ? `status-${row.status}` : '';
        tr.setAttribute('data-subpart', row.subpart);
        tr.setAttribute('data-status-raw', row.status);
        tr.setAttribute('data-type', row.type);
        
        const typeBg = row.type === 'IR' ? '#005a9c' : '#f0ad4e';
        const needsAction = (row.status === 'fail' || row.status === 'partial');
        
        let typeCellContent;
        if(row.isCustom) {
            typeCellContent = `
            <select onchange="updateRow('${tabKey}', ${index}, 'type', this.value)" style="background:${typeBg};color:white;border:none;width:100%;border-radius:3px;">
                <option value="IR" ${row.type==='IR'?'selected':''}>IR</option>
                <option value="AMC" ${row.type==='AMC'?'selected':''}>AMC</option>
            </select>`;
        } else {
            typeCellContent = `<div style="background:${typeBg};color:white;padding:4px 0;text-align:center;border-radius:3px;font-weight:bold;font-size:11px;">${row.type}</div>`;
        }
        
        tr.innerHTML = `
            <td><input type="text" value="${row.ref}" onchange="updateRow('${tabKey}', ${index}, 'ref', this.value)" style="border:none;background:transparent;width:100%;${row.type==='IR'?'font-weight:bold;':''}"></td>
            <td>${typeCellContent}</td>
            <td><textarea oninput="autoResize(this)" onchange="updateRow('${tabKey}', ${index}, 'req', this.value)">${row.req}</textarea></td>
            <td><select onchange="updateRow('${tabKey}', ${index}, 'status', this.value)" style="width:100%;border:none;background:transparent;">
                <option value="">--</option>
                <option value="ok" ${row.status==='ok'?'selected':''}>OK</option>
                <option value="partial" ${row.status==='partial'?'selected':''}>Delvis</option>
                <option value="fail" ${row.status==='fail'?'selected':''}>Avvik</option>
                <option value="na" ${row.status==='na'?'selected':''}>N/A</option>
            </select></td>
            <td><textarea oninput="autoResize(this)" onchange="updateRow('${tabKey}', ${index}, 'current', this.value)">${row.current}</textarea></td>
            <td><textarea oninput="autoResize(this)" onchange="updateRow('${tabKey}', ${index}, 'manualRef', this.value)">${row.manualRef || ''}</textarea></td>
            <td><textarea oninput="autoResize(this)" onchange="updateRow('${tabKey}', ${index}, 'comment', this.value)">${row.comment}</textarea></td>
            <td><textarea class="${needsAction && !row.responsible ? 'required-field' : ''}" oninput="autoResize(this)" onchange="updateRow('${tabKey}', ${index}, 'responsible', this.value)">${row.responsible}</textarea></td>
            <td><input type="date" class="${needsAction && !row.deadline ? 'required-field' : ''}" value="${row.deadline || ''}" onchange="updateRow('${tabKey}', ${index}, 'deadline', this.value)"></td>
            <td style="text-align:center;"><button class="btn-icon-delete" onclick="deleteRow('${tabKey}', ${index})">✖</button></td>
        `;
        tbody.appendChild(tr);
    });
    
    setTimeout(() => {
            container.querySelectorAll('textarea').forEach(ta => autoResize(ta));
    }, 0);
    
    enableResize(container.querySelector('table'));

    // --- 3. RE-APPLY FILTERS IMMEDIATELY ---
    filterTable(tabKey, searchValue);
}

function updateRow(tabKey, index, field, value) {
    appData[tabKey][index][field] = value;
    localStorage.setItem('gapData_GH2025_v54', JSON.stringify(appData));
    
    const ind = document.getElementById('save-indicator');
    ind.style.opacity = 1; setTimeout(() => ind.style.opacity = 0, 1000);

    if (field === 'status') { renderTable(tabKey); updateDashboard(); updateTabProgress(); renderFollowupTable(); }
    else if (field === 'type') { renderTable(tabKey); } 
    else if (['responsible', 'deadline'].includes(field)) {
            const row = appData[tabKey][index];
            const tr = document.querySelector(`#table-${tabKey} tbody tr:nth-child(${index+1})`);
            const needs = (row.status === 'fail' || row.status === 'partial');
            
            const rEl = tr.querySelector(`textarea[onchange*="'responsible'"]`);
            if(rEl) rEl.className = (needs && !row.responsible) ? 'required-field' : '';
            
            const dEl = tr.querySelector(`input[onchange*="'deadline'"]`);
            if(dEl) dEl.className = (needs && !row.deadline) ? 'required-field' : '';
            
            if(document.getElementById('follow-up').classList.contains('active')) renderFollowupTable();
    }
}

function addRow(tabKey) {
    appData[tabKey].push({ isCustom: true, subpart: "Ny", type: "IR", ref: "NY", req: "", status: "", current: "", manualRef: "", comment: "", responsible: "", deadline: "" });
    renderTable(tabKey);
    updateTabProgress();
}

function deleteRow(tabKey, index) {
    if(confirm("Slette rad?")) { appData[tabKey].splice(index, 1); localStorage.setItem('gapData_GH2025_v54', JSON.stringify(appData)); renderTable(tabKey); updateDashboard(); updateTabProgress(); renderFollowupTable(); }
}

function filterSubpart(tabKey, sp, btn) {
    const cont = document.getElementById(tabKey);
    cont.querySelectorAll('.btn-subtab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterTable(tabKey, cont.querySelector('.search-bar').value);
}

function filterTable(tabKey, text) {
    const terms = text.toLowerCase().split(" ").filter(t => t.trim());
    const container = document.getElementById(tabKey);
    
    const activeSp = container.querySelector('.btn-subtab.active').innerText;
    const hideProcessed = document.getElementById(`btn-hide-${tabKey}`).classList.contains('active-filter');
    const activeType = container.getAttribute('data-type-filter') || 'all';

    const rows = document.querySelectorAll(`#table-${tabKey} tbody tr`);
    rows.forEach(tr => {
        const sp = tr.getAttribute('data-subpart');
        const st = tr.getAttribute('data-status-raw');
        const ty = tr.getAttribute('data-type');
        
        const matchSp = activeSp === 'Alle' || sp === activeSp;
        // Updated Hide Logic: Hide if status is anything but empty string
        const isProcessed = (st !== '');
        const matchHide = !(hideProcessed && isProcessed);
        
        // Type Logic
        const matchType = (activeType === 'all') || (ty === activeType);

        const content = tr.innerText.toLowerCase() + " " + Array.from(tr.querySelectorAll('input, textarea')).map(i => i.value.toLowerCase()).join(" ");
        const matchSearch = terms.every(t => content.includes(t));
        
        tr.style.display = (matchSp && matchSearch && matchHide && matchType) ? '' : 'none';
    });
}

function updateDashboard() {
    let c = { ok: 0, partial: 0, fail: 0, total: 0, eval: 0 };
    
    // Helper to aggregate subpart stats
    function getSubpartStats(rows) {
        let stats = {};
        rows.forEach(r => {
            if(!stats[r.subpart]) stats[r.subpart] = { tot: 0, eval: 0 };
            stats[r.subpart].tot++;
            if(r.status) stats[r.subpart].eval++;
        });
        return stats;
    }

    // Global stats aggregation
    for(let k in appData) appData[k].forEach(r => {
        c.total++;
        if(r.status) { c.eval++; c[r.status]++; }
    });

    const pct = c.total ? Math.round((c.eval/c.total)*100) : 0;
    document.getElementById('progress-percent').innerText = pct + "%";
    document.getElementById('progress-bar').style.width = pct + "%";
    document.getElementById('count-ok').innerText = c.ok;
    document.getElementById('count-partial').innerText = c.partial;
    document.getElementById('count-fail').innerText = c.fail;

    // --- SPLIT TABLES ---
    let htmlOrg = `<table class="subpart-table"><tr><th>Subpart</th><th>Totalt</th><th>Vurdert</th><th>%</th></tr>`;
    let orgStats = getSubpartStats(appData['part-org']);
    for(let s in orgStats) {
        let p = Math.round((orgStats[s].eval/orgStats[s].tot)*100);
        htmlOrg += `<tr><td>${s}</td><td>${orgStats[s].tot}</td><td>${orgStats[s].eval}</td><td>${p}%</td></tr>`;
    }
    htmlOrg += `</table>`;
    document.getElementById('table-stats-org').innerHTML = htmlOrg;

    let htmlOps = `<table class="subpart-table"><tr><th>Subpart</th><th>Totalt</th><th>Vurdert</th><th>%</th></tr>`;
    let opsStats = getSubpartStats(appData['part-ops']);
    for(let s in opsStats) {
        let p = Math.round((opsStats[s].eval/opsStats[s].tot)*100);
        htmlOps += `<tr><td>${s}</td><td>${opsStats[s].tot}</td><td>${opsStats[s].eval}</td><td>${p}%</td></tr>`;
    }
    htmlOps += `</table>`;
    document.getElementById('table-stats-ops').innerHTML = htmlOps;

    if(window.Chart) {
        const ctx = document.getElementById('statusChart').getContext('2d');
        if(myChart) myChart.destroy();
        myChart = new Chart(ctx, {
            type: 'doughnut',
            data: { labels: ['OK', 'Delvis', 'Avvik', 'Gjenstår'], datasets: [{ data: [c.ok, c.partial, c.fail, c.total-c.eval], backgroundColor: ['#28a745','#ffc107','#dc3545','#eee'] }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
        });
    }
}

function updateTabProgress() {
    let actionCount = 0;
    ['part-org', 'part-ops'].forEach(k => {
        const tot = appData[k].length;
        const don = appData[k].filter(r => r.status).length;
        const el = document.getElementById(`pct-${k}`);
        if(el) el.innerText = tot ? Math.round((don/tot)*100) + "%" : "0%";
        
        // Count action items
        actionCount += appData[k].filter(r => r.status === 'fail' || r.status === 'partial').length;
    });
    document.getElementById('count-action-items').innerText = actionCount;
}

function renderFollowupTable() {
    const container = document.getElementById('follow-up-container');
    let html = `
        <table class="subpart-table" style="text-align:left;">
            <thead>
                <tr>
                    <th style="width:10%">Område</th>
                    <th style="width:10%">Ref</th>
                    <th style="width:5%">Type</th>
                    <th style="width:25%">Krav</th>
                    <th style="width:5%">Status</th>
                    <th style="width:20%">Tiltak / Kommentar</th>
                    <th style="width:10%">Ansvarlig</th>
                    <th style="width:10%">Frist</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    let hasItems = false;
    
    ['part-org', 'part-ops'].forEach(key => {
        const label = key === 'part-org' ? 'Annex I' : 'Annex II';
        appData[key].forEach(row => {
            if(row.status === 'fail' || row.status === 'partial') {
                hasItems = true;
                const typeBg = row.type === 'IR' ? '#005a9c' : '#f0ad4e';
                const statusClass = row.status === 'fail' ? 'status-fail' : 'status-partial';
                const statusText = row.status === 'fail' ? 'Avvik' : 'Delvis';
                
                html += `
                    <tr>
                        <td>${label}<br><span style="font-size:10px;color:#666">${row.subpart}</span></td>
                        <td style="font-weight:bold;">${row.ref}</td>
                        <td><div style="background:${typeBg};color:white;padding:2px;border-radius:3px;font-size:10px;text-align:center;">${row.type}</div></td>
                        <td style="text-align:left;">${row.req}</td>
                        <td class="${statusClass}" style="text-align:center;font-weight:bold;">${statusText}</td>
                        <td style="text-align:left;">${row.comment || '-'}</td>
                        <td>${row.responsible || '<span style="color:red">Mangler</span>'}</td>
                        <td>${row.deadline || '<span style="color:red">Mangler</span>'}</td>
                    </tr>
                `;
            }
        });
    });

    if(!hasItems) {
        html += `<tr><td colspan="8" style="text-align:center; padding:20px;">Ingen punkter til oppfølging funnet (Ingen "Avvik" eller "Delvis" registrert).</td></tr>`;
    }

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function generateStatusPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102);
    doc.text("Statusrapport: GAP (EU) 2025/20", 14, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generert: ${new Date().toLocaleString('no-NO')}`, 14, 28);
    doc.line(14, 32, 196, 32);

    // --- DASHBOARD DATA IN PDF ---
    let ok = document.getElementById('count-ok').innerText;
    let partial = document.getElementById('count-partial').innerText;
    let fail = document.getElementById('count-fail').innerText;
    let pct = document.getElementById('progress-percent').innerText;

    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text("1. Statusoversikt", 14, 42);
    doc.setFontSize(10);
    doc.text(`Total Fremdrift: ${pct}`, 14, 50);
    doc.text(`OK: ${ok}  |  Delvis: ${partial}  |  Avvik: ${fail}`, 14, 56);

    // Subpart Stats Table in PDF
    function getPdfRows(key, label) {
            let stats = {};
            appData[key].forEach(r => {
            if(!stats[r.subpart]) stats[r.subpart] = { tot: 0, eval: 0 };
            stats[r.subpart].tot++;
            if(r.status) stats[r.subpart].eval++;
            });
            let rows = [];
            rows.push([{content: label, colSpan: 4, styles: {fontStyle: 'bold', fillColor: [240, 240, 240]}}]);
            for(let s in stats) {
                let p = Math.round((stats[s].eval/stats[s].tot)*100);
                rows.push([s, stats[s].tot, stats[s].eval, p+'%']);
            }
            return rows;
    }

    let pdfBody = [...getPdfRows('part-org', 'Annex I - PART-ORGH'), ...getPdfRows('part-ops', 'Annex II - PART-GH.OPS')];
    
    if(pdfBody.length > 0) {
        doc.autoTable({
            head: [['Subpart', 'Totalt', 'Vurdert', '%']],
            body: pdfBody,
            startY: 62,
            theme: 'grid',
            styles: { fontSize: 9 },
            headStyles: { fillColor: [100, 100, 100] }
        });
    }

    // --- ACTION PLAN ---
    let finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(12);
    doc.text("2. Handlingsplan (Avvik & Delvis)", 14, finalY);

    let body = [];
    ['part-org', 'part-ops'].forEach(k => {
        appData[k].forEach(r => {
            if(r.status === 'fail' || r.status === 'partial') {
                body.push([r.ref, r.status.toUpperCase(), r.req.substring(0,60), r.comment, r.responsible, r.deadline]);
            }
        });
    });

    body.sort((a,b) => (a[5] || '9999').localeCompare(b[5] || '9999'));

    if(body.length > 0) {
        doc.autoTable({
            head: [['Ref', 'Status', 'Krav', 'Tiltak', 'Ansvarlig', 'Frist']],
            body: body,
            startY: finalY + 5,
            theme: 'grid',
            styles: { fontSize: 8 },
            headStyles: { fillColor: [0, 51, 102] }
        });
    } else {
        doc.setFontSize(10);
        doc.text("Ingen åpne avvik registrert.", 14, finalY + 10);
    }

    doc.save(`GAP_Status_${new Date().toISOString().slice(0,10)}.pdf`);
}

function exportToJSON() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(appData, null, 2)], {type:"application/json"}));
    a.download = `GAP_2025-20_${new Date().toISOString().slice(0,16).replace(/[:T]/g,'_')}.json`;
    a.click();
}

function importFromJSON(inp) {
    const r = new FileReader();
    r.onload = e => { appData = JSON.parse(e.target.result); localStorage.setItem('gapData_GH2025_v54', JSON.stringify(appData)); location.reload(); };
    r.readAsText(inp.files[0]);
}

function exportToCSV() {
    let csv = "\uFEFFFane;Subpart;Ref;Type;Status;Krav;Nåværende;ManualRef;Tiltak;Ansvarlig;Frist\n";
    for(let k in appData) appData[k].forEach(r => csv += `${k};${r.subpart};${r.ref};${r.type};${r.status};"${(r.req||"").replace(/"/g,'""')}";"${(r.current||"").replace(/"/g,'""')}";"${(r.manualRef||"").replace(/"/g,'""')}";"${(r.comment||"").replace(/"/g,'""')}";"${(r.responsible||"").replace(/"/g,'""')}";${r.deadline}\n`);
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], {type:"text/csv"})); a.download="GAP_Export.csv"; a.click();
}

function resetAllData() { if(confirm("Nullstill alt?")) { localStorage.removeItem('gapData_GH2025_v54'); location.reload(); } }

function enableResize(t) {
    t.querySelectorAll('th').forEach(th => {
        const r = document.createElement('div'); r.className = 'resizer'; th.appendChild(r);
        let x, w;
        const m = e => { th.style.width = (w + e.clientX - x) + 'px'; };
        const u = () => { document.removeEventListener('mousemove', m); document.removeEventListener('mouseup', u); };
        r.addEventListener('mousedown', e => { x = e.clientX; w = th.offsetWidth; document.addEventListener('mousemove', m); document.addEventListener('mouseup', u); });
    });
}