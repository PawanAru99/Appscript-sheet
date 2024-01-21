// Code.gs

function doGet(e) {
    var htmlOutput = HtmlService.createTemplateFromFile('home');
    htmlOutput.result = 'Home';
    var y = htmlOutput.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
}

function doPost(e) {
    Logger.log(JSON.stringify(e));

    if (e.parameter.Submit == 'Get Result') {
        var aadharnum = e.parameter.aadharno;
        var shalid = e.parameter.shalid;
        var sheet = SpreadsheetApp.openById('11AumIRMy7LRCXwDm3LmA9Pev-YKCdiHE0LlFMoq5YOk').getSheetByName("AllData");

        var data = sheet.getDataRange().getValues();
        var headers = data[2];

        var columnIndex = headers.indexOf("SHALARTHID");
        var userFound = false;
        var userData;

        for (var i = 1; i < data.length; i++) {
            var userid = data[i][columnIndex];
            var aadharnumber = data[i][headers.indexOf("ADHARNO")];

            if (userid == shalid && aadharnumber == aadharnum) {
                userData = data[i];
                userFound = true;
                break;
            }
        }

        if (userFound) {
            var userOutput = HtmlService.createTemplateFromFile('result');
            userOutput.userFound = true;

            userOutput.shalid = shalid;
            userOutput.aadharno = userData[headers.indexOf("ADHARNO")];
            userOutput.employee = userData[headers.indexOf("NAME")];
            userOutput.panno = userData[headers.indexOf("PAN")];
            userOutput.taluka = userData[headers.indexOf("Taluka")];
            userOutput.udisecode = userData[headers.indexOf("UDISECODE")];
            userOutput.udisecode2 = userData[headers.indexOf("UDISECODE2")];
            userOutput.school = userData[headers.indexOf("School")];            
            userOutput.gender = userData[headers.indexOf("GENDER")];
            userOutput.designation = userData[headers.indexOf("DESIGNATION")];
            userOutput.bankname = userData[headers.indexOf("BankName")];
            userOutput.village = userData[headers.indexOf("village")];
            userOutput.accountno= userData[headers.indexOf("Acc")];
            userOutput.mobileno = userData[headers.indexOf("Mob")];


            //March
            userOutput.basicPay = userData[headers.indexOf("BASICPAY")];
            userOutput.da = userData[headers.indexOf("D.A")];
            userOutput.hra = userData[headers.indexOf("HRA")];
            userOutput.ta = userData[headers.indexOf("T.A")];
            userOutput.daArrears = userData[headers.indexOf("DAARREARS")];
            userOutput.basicArrears = userData[headers.indexOf("BASICARREARS")];
            userOutput.npsEmpRAllow = userData[headers.indexOf("NPSEMPRALLOW")];
            userOutput.grossAfterDeductingFA = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA")];
            userOutput.pt = userData[headers.indexOf("PT")];
            userOutput.gpf = userData[headers.indexOf("GPF")];
            userOutput.gisZp = userData[headers.indexOf("GIS(ZP)")];
            userOutput.npsTotal = userData[headers.indexOf("NPSTOTAL")];
            userOutput.groupAccidentalPolicy = userData[headers.indexOf("GROUPACCIDENTALPOLICY")];
            userOutput.ngrLic = userData[headers.indexOf("NGR(LIC)")];
            userOutput.incomeTax = userData[headers.indexOf("INCOMETAX")];

            //Apr
            userOutput.basicPay3 = userData[headers.indexOf("BASICPAY3")];
            userOutput.da4 = userData[headers.indexOf("D.A4")];
            userOutput.hra5 = userData[headers.indexOf("HRA5")];
            userOutput.ta6 = userData[headers.indexOf("T.A6")];
            userOutput.daArrears7 = userData[headers.indexOf("DAARREARS7")];
            userOutput.basicArrears8 = userData[headers.indexOf("BASICARREARS8")];
            userOutput.npsEmpRAllow9 = userData[headers.indexOf("NPSEMPRALLOW9")];
            userOutput.grossAfterDeductingFA10 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA10")];
            userOutput.pt11 = userData[headers.indexOf("PT11")];
            userOutput.gpf12 = userData[headers.indexOf("GPF12")];
            userOutput.gisZp13 = userData[headers.indexOf("GIS(ZP)13")];
            userOutput.npsTotal14 = userData[headers.indexOf("NPSTOTAL14")];
            userOutput.groupAccidentalPolicy15 = userData[headers.indexOf("GROUPACCIDENTALPOLICY15")];
            userOutput.ngrLic16 = userData[headers.indexOf("NGR(LIC)16")];
            userOutput.incomeTax17 = userData[headers.indexOf("INCOMETAX17")];

            //May
            userOutput.basicPay18 = userData[headers.indexOf("BASICPAY18")];
            userOutput.da19 = userData[headers.indexOf("D.A19")];
            userOutput.hra20 = userData[headers.indexOf("HRA20")];
            userOutput.ta21 = userData[headers.indexOf("T.A21")];
            userOutput.daArrears22 = userData[headers.indexOf("DAARREARS22")];
            userOutput.basicArrears23 = userData[headers.indexOf("BASICARREARS23")];
            userOutput.npsEmpRAllow24 = userData[headers.indexOf("NPSEMPRALLOW24")];
            userOutput.grossAfterDeductingFA25 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA25")];
            userOutput.pt26 = userData[headers.indexOf("PT26")];
            userOutput.gpf27 = userData[headers.indexOf("GPF27")];
            userOutput.gisZp28 = userData[headers.indexOf("GIS(ZP)28")];
            userOutput.npsTotal29 = userData[headers.indexOf("NPSTOTAL29")];
            userOutput.groupAccidentalPolicy30 = userData[headers.indexOf("GROUPACCIDENTALPOLICY30")];
            userOutput.ngrLic31 = userData[headers.indexOf("NGR(LIC)31")];
            userOutput.incomeTax32 = userData[headers.indexOf("INCOMETAX32")];

            // June
            userOutput.basicPay33 = userData[headers.indexOf("BASICPAY33")];
            userOutput.da34 = userData[headers.indexOf("D.A34")];
            userOutput.hra35 = userData[headers.indexOf("HRA35")];
            userOutput.ta36 = userData[headers.indexOf("T.A36")];
            userOutput.daArrears37 = userData[headers.indexOf("DAARREARS37")];
            userOutput.basicArrears38 = userData[headers.indexOf("BASICARREARS38")];
            userOutput.npsEmpRAllow39 = userData[headers.indexOf("NPSEMPRALLOW39")];
            userOutput.grossAfterDeductingFA40 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA40")];
            userOutput.pt41 = userData[headers.indexOf("PT41")];
            userOutput.gpf42 = userData[headers.indexOf("GPF42")];
            userOutput.gisZp43 = userData[headers.indexOf("GIS(ZP)43")];
            userOutput.npsTotal44 = userData[headers.indexOf("NPSTOTAL44")];
            userOutput.groupAccidentalPolicy45 = userData[headers.indexOf("GROUPACCIDENTALPOLICY45")];
            userOutput.ngrLic46 = userData[headers.indexOf("NGR(LIC)46")];
            userOutput.incomeTax47 = userData[headers.indexOf("INCOMETAX47")];

            //July
            userOutput.basicPay48 = userData[headers.indexOf("BASICPAY48")];
            userOutput.da49 = userData[headers.indexOf("D.A49")];
            userOutput.hra50 = userData[headers.indexOf("HRA50")];
            userOutput.ta51 = userData[headers.indexOf("T.A51")];
            userOutput.daArrears52 = userData[headers.indexOf("DAARREARS52")];
            userOutput.basicArrears53 = userData[headers.indexOf("BASICARREARS53")];
            userOutput.npsEmpRAllow54 = userData[headers.indexOf("NPSEMPRALLOW54")];
            userOutput.grossAfterDeductingFA55 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA55")];
            userOutput.pt56 = userData[headers.indexOf("PT56")];
            userOutput.gpf57 = userData[headers.indexOf("GPF57")];
            userOutput.gisZp58 = userData[headers.indexOf("GIS(ZP)58")];
            userOutput.npsTotal59 = userData[headers.indexOf("NPSTOTAL59")];
            userOutput.groupAccidentalPolicy60 = userData[headers.indexOf("GROUPACCIDENTALPOLICY60")];
            userOutput.ngrLic61 = userData[headers.indexOf("NGR(LIC)61")];
            userOutput.incomeTax62 = userData[headers.indexOf("INCOMETAX62")];

           
            //Aug
            userOutput.basicPay63 = userData[headers.indexOf("BASICPAY63")];
            userOutput.da64 = userData[headers.indexOf("D.A64")];
            userOutput.hra65 = userData[headers.indexOf("HRA65")];
            userOutput.ta66 = userData[headers.indexOf("T.A66")];
            userOutput.daArrears67 = userData[headers.indexOf("DAARREARS67")];
            userOutput.basicArrears68 = userData[headers.indexOf("BASICARREARS68")];
            userOutput.npsEmpRAllow69 = userData[headers.indexOf("NPSEMPRALLOW69")];
            userOutput.grossAfterDeductingFA70 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA70")];
            userOutput.pt71 = userData[headers.indexOf("PT71")];
            userOutput.gpf72 = userData[headers.indexOf("GPF72")];
            userOutput.gisZp73 = userData[headers.indexOf("GIS(ZP)73")];
            userOutput.npsTotal74 = userData[headers.indexOf("NPSTOTAL74")];
            userOutput.groupAccidentalPolicy75 = userData[headers.indexOf("GROUPACCIDENTALPOLICY75")];
            userOutput.ngrLic76 = userData[headers.indexOf("NGR(LIC)76")];
            userOutput.incomeTax77 = userData[headers.indexOf("INCOMETAX77")];

            //Sept
            userOutput.basicPay78 = userData[headers.indexOf("BASICPAY78")];
            userOutput.da79 = userData[headers.indexOf("D.A79")];
            userOutput.hra80 = userData[headers.indexOf("HRA80")];
            userOutput.ta81 = userData[headers.indexOf("T.A81")];
            userOutput.daArrears82 = userData[headers.indexOf("DAARREARS82")];
            userOutput.basicArrears83 = userData[headers.indexOf("BASICARREARS83")];
            userOutput.npsEmpRAllow84 = userData[headers.indexOf("NPSEMPRALLOW84")];
            userOutput.grossAfterDeductingFA85 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA85")];
            userOutput.pt86 = userData[headers.indexOf("PT86")];
            userOutput.gpf87 = userData[headers.indexOf("GPF87")];
            userOutput.gisZp88 = userData[headers.indexOf("GIS(ZP)88")];
            userOutput.npsTotal89 = userData[headers.indexOf("NPSTOTAL89")];
            userOutput.groupAccidentalPolicy90 = userData[headers.indexOf("GROUPACCIDENTALPOLICY90")];
            userOutput.ngrLic91 = userData[headers.indexOf("NGR(LIC)91")];
            userOutput.incomeTax92 = userData[headers.indexOf("INCOMETAX92")];

            //Oct
            userOutput.basicPay93 = userData[headers.indexOf("BASICPAY93")];
            userOutput.da94 = userData[headers.indexOf("D.A94")];
            userOutput.hra95 = userData[headers.indexOf("HRA95")];
            userOutput.ta96 = userData[headers.indexOf("T.A96")];
            userOutput.daArrears97 = userData[headers.indexOf("DAARREARS97")];
            userOutput.basicArrears98 = userData[headers.indexOf("BASICARREARS98")];
            userOutput.npsEmpRAllow99 = userData[headers.indexOf("NPSEMPRALLOW99")];
            userOutput.grossAfterDeductingFA100 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA100")];
            userOutput.pt101 = userData[headers.indexOf("PT101")];
            userOutput.gpf102 = userData[headers.indexOf("GPF102")];
            userOutput.gisZp103 = userData[headers.indexOf("GIS(ZP)103")];
            userOutput.npsTotal104 = userData[headers.indexOf("NPSTOTAL104")];
            userOutput.groupAccidentalPolicy105 = userData[headers.indexOf("GROUPACCIDENTALPOLICY105")];
            userOutput.ngrLic106 = userData[headers.indexOf("NGR(LIC)106")];
            userOutput.incomeTax107 = userData[headers.indexOf("INCOMETAX107")];

            //Nov23
            userOutput.basicPay108 = userData[headers.indexOf("BASICPAY108")];
            userOutput.da109 = userData[headers.indexOf("D.A109")];
            userOutput.hra110 = userData[headers.indexOf("HRA110")];
            userOutput.ta111 = userData[headers.indexOf("T.A111")];
            userOutput.daArrears112 = userData[headers.indexOf("DAARREARS112")];
            userOutput.basicArrears113 = userData[headers.indexOf("BASICARREARS113")];
            userOutput.npsEmpRAllow114 = userData[headers.indexOf("NPSEMPRALLOW114")];
            userOutput.grossAfterDeductingFA115 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA115")];
            userOutput.pt116 = userData[headers.indexOf("PT116")];
            userOutput.gpf117 = userData[headers.indexOf("GPF117")];
            userOutput.gisZp118 = userData[headers.indexOf("GIS(ZP)118")];
            userOutput.npsTotal119 = userData[headers.indexOf("NPSTOTAL119")];
            userOutput.groupAccidentalPolicy120 = userData[headers.indexOf("GROUPACCIDENTALPOLICY120")];
            userOutput.ngrLic121 = userData[headers.indexOf("NGR(LIC)121")];
            userOutput.incomeTax122 = userData[headers.indexOf("INCOMETAX122")];

            //Dec23
            userOutput.basicPay123 = userData[headers.indexOf("BASICPAY123")];
            userOutput.da124 = userData[headers.indexOf("D.A124")];
            userOutput.hra125 = userData[headers.indexOf("HRA125")];
            userOutput.ta126 = userData[headers.indexOf("T.A126")];
            userOutput.daArrears127 = userData[headers.indexOf("DAARREARS127")];
            userOutput.basicArrears128 = userData[headers.indexOf("BASICARREARS128")];
            userOutput.npsEmpRAllow129 = userData[headers.indexOf("NPSEMPRALLOW129")];
            userOutput.grossAfterDeductingFA130 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA130")];
            userOutput.pt131 = userData[headers.indexOf("PT131")];
            userOutput.gpf132 = userData[headers.indexOf("GPF132")];
            userOutput.gisZp133 = userData[headers.indexOf("GIS(ZP)133")];
            userOutput.npsTotal134 = userData[headers.indexOf("NPSTOTAL134")];
            userOutput.groupAccidentalPolicy135 = userData[headers.indexOf("GROUPACCIDENTALPOLICY135")];
            userOutput.ngrLic136 = userData[headers.indexOf("NGR(LIC)136")];
            userOutput.incomeTax137 = userData[headers.indexOf("INCOMETAX137")];

            //Jan
            userOutput.basicPay138 = userData[headers.indexOf("BASICPAY138")];
            userOutput.da139 = userData[headers.indexOf("D.A139")];
            userOutput.hra140 = userData[headers.indexOf("HRA140")];
            userOutput.ta141 = userData[headers.indexOf("T.A141")];
            userOutput.daArrears142 = userData[headers.indexOf("DAARREARS142")];
            userOutput.basicArrears143 = userData[headers.indexOf("BASICARREARS143")];
            userOutput.npsEmpRAllow144 = userData[headers.indexOf("NPSEMPRALLOW144")];
            userOutput.grossAfterDeductingFA145 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA145")];
            userOutput.pt146 = userData[headers.indexOf("PT146")];
            userOutput.gpf147 = userData[headers.indexOf("GPF147")];
            userOutput.gisZp148 = userData[headers.indexOf("GIS(ZP)148")];
            userOutput.npsTotal149 = userData[headers.indexOf("NPSTOTAL149")];
            userOutput.groupAccidentalPolicy150 = userData[headers.indexOf("GROUPACCIDENTALPOLICY150")];
            userOutput.ngrLic151 = userData[headers.indexOf("NGR(LIC)151")];
            userOutput.incomeTax152 = userData[headers.indexOf("INCOMETAX152")];

            //Feb
            userOutput.basicPay153 = userData[headers.indexOf("BASICPAY153")];
            userOutput.da154 = userData[headers.indexOf("D.A154")];
            userOutput.hra155 = userData[headers.indexOf("HRA155")];
            userOutput.ta156 = userData[headers.indexOf("T.A156")];
            userOutput.daArrears157 = userData[headers.indexOf("DAARREARS157")];
            userOutput.basicArrears158 = userData[headers.indexOf("BASICARREARS158")];
            userOutput.npsEmpRAllow159 = userData[headers.indexOf("NPSEMPRALLOW159")];
            userOutput.grossAfterDeductingFA160 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA160")];
            userOutput.pt161 = userData[headers.indexOf("PT161")];
            userOutput.gpf162 = userData[headers.indexOf("GPF162")];
            userOutput.gisZp163 = userData[headers.indexOf("GIS(ZP)163")];
            userOutput.npsTotal164 = userData[headers.indexOf("NPSTOTAL164")];
            userOutput.groupAccidentalPolicy165 = userData[headers.indexOf("GROUPACCIDENTALPOLICY165")];
            userOutput.ngrLic166 = userData[headers.indexOf("NGR(LIC)166")];
            userOutput.incomeTax167 = userData[headers.indexOf("INCOMETAX167")];

            //Total Pay
            userOutput.basicPay168 = userData[headers.indexOf("BASICPAY168")];
            userOutput.da169 = userData[headers.indexOf("D.A169")];
            userOutput.hra170 = userData[headers.indexOf("HRA170")];
            userOutput.ta171 = userData[headers.indexOf("T.A171")];
            userOutput.daArrears172 = userData[headers.indexOf("DAARREARS172")];
            userOutput.basicArrears173 = userData[headers.indexOf("BASICARREARS173")];
            userOutput.npsEmpRAllow174 = userData[headers.indexOf("NPSEMPRALLOW174")];
            userOutput.grossAfterDeductingFA175 = userData[headers.indexOf("GROSSAFTERDEDUCTINGFA175")];
            userOutput.pt176 = userData[headers.indexOf("PT176")];
            userOutput.gpf177 = userData[headers.indexOf("GPF177")];
            userOutput.gisZp178 = userData[headers.indexOf("GIS(ZP)178")];
            userOutput.npsTotal179 = userData[headers.indexOf("NPSTOTAL179")];
            userOutput.groupAccidentalPolicy180 = userData[headers.indexOf("GROUPACCIDENTALPOLICY180")];
            userOutput.ngrLic181 = userData[headers.indexOf("NGR(LIC)181")];
            userOutput.incomeTax182 = userData[headers.indexOf("INCOMETAX182")];

            return userOutput.evaluate();
        } else {
            var errorOutput = HtmlService.createTemplateFromFile('result');
            errorOutput.userFound = false;
            errorOutput.error = 'User not found';
            errorOutput.shalid = shalid;
            return errorOutput.evaluate();
        }
    } else {
        Logger.log("Invalid form submission");
    }
}


function getUrl() {
    var url = ScriptApp.getService().getUrl();
    return url;
}