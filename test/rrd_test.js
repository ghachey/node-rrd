var assert = require('assert');
var should = require('should');

var rrd = require('../rrd');

describe('Fetching data from Round Robin Databases', function(){

	describe('fetchData', function(){
		it('fetch data from RRD database and encapsulate it in a simple format', function(){

      // Make test async...

      var fetched_expected = [
        {
          "timestamp": 1395994800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            378.61115812
          ]
        },
        {
          "timestamp": 1395995100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            453.19984099
          ]
        },
        {
          "timestamp": 1395995400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            433.97490515
          ]
        },
        {
          "timestamp": 1395995700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.48375712
          ]
        },
        {
          "timestamp": 1395996000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.18852713
          ]
        },
        {
          "timestamp": 1395996300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            470.49080842
          ]
        },
        {
          "timestamp": 1395996600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            449.12019934
          ]
        },
        {
          "timestamp": 1395996900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            454.1069584
          ]
        },
        {
          "timestamp": 1395997200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.34097073
          ]
        },
        {
          "timestamp": 1395997500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.80983389
          ]
        },
        {
          "timestamp": 1395997800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            726.35747508
          ]
        },
        {
          "timestamp": 1395998100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            739.06543237
          ]
        },
        {
          "timestamp": 1395998400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            923.18127682
          ]
        },
        {
          "timestamp": 1395998700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.98071052
          ]
        },
        {
          "timestamp": 1395999000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            749.28612524
          ]
        },
        {
          "timestamp": 1395999300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            605.81023135
          ]
        },
        {
          "timestamp": 1395999600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            759.44372093
          ]
        },
        {
          "timestamp": 1395999900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            751.39135105
          ]
        },
        {
          "timestamp": 1396000200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.3338206
          ]
        },
        {
          "timestamp": 1396000500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            764.93556253
          ]
        },
        {
          "timestamp": 1396000800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.25623149
          ]
        },
        {
          "timestamp": 1396001100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            738.96146179
          ]
        },
        {
          "timestamp": 1396001400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.73252492
          ]
        },
        {
          "timestamp": 1396001700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.47521595
          ]
        },
        {
          "timestamp": 1396002000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.8316722
          ]
        },
        {
          "timestamp": 1396002300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.14857143
          ]
        },
        {
          "timestamp": 1396002600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            761.56591362
          ]
        },
        {
          "timestamp": 1396002900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            740.65515305
          ]
        },
        {
          "timestamp": 1396003200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            913.88722791
          ]
        },
        {
          "timestamp": 1396003500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            773.35809524
          ]
        },
        {
          "timestamp": 1396003800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            594.84997884
          ]
        },
        {
          "timestamp": 1396004100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            735.20025372
          ]
        },
        {
          "timestamp": 1396004400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.55087486
          ]
        },
        {
          "timestamp": 1396004700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            756.03830565
          ]
        },
        {
          "timestamp": 1396005000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            757.90753045
          ]
        },
        {
          "timestamp": 1396005300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            750.80620155
          ]
        },
        {
          "timestamp": 1396005600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.83348837
          ]
        },
        {
          "timestamp": 1396005900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.61733112
          ]
        },
        {
          "timestamp": 1396006200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.16589147
          ]
        },
        {
          "timestamp": 1396006500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            773.21880399
          ]
        },
        {
          "timestamp": 1396006800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.17630122
          ]
        },
        {
          "timestamp": 1396007100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            750.09275748
          ]
        },
        {
          "timestamp": 1396007400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            905.529701
          ]
        },
        {
          "timestamp": 1396007700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            779.53215947
          ]
        },
        {
          "timestamp": 1396008000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            739.98330011
          ]
        },
        {
          "timestamp": 1396008300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.34368771
          ]
        },
        {
          "timestamp": 1396008600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.07669989
          ]
        },
        {
          "timestamp": 1396008900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            628.86857143
          ]
        },
        {
          "timestamp": 1396009200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            726.84983389
          ]
        },
        {
          "timestamp": 1396009500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.76822813
          ]
        },
        {
          "timestamp": 1396009800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.38815061
          ]
        },
        {
          "timestamp": 1396010100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            757.8551495
          ]
        },
        {
          "timestamp": 1396010400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.45142857
          ]
        },
        {
          "timestamp": 1396010700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            763.81992248
          ]
        },
        {
          "timestamp": 1396011000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            760.45645869
          ]
        },
        {
          "timestamp": 1396011300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.82663974
          ]
        },
        {
          "timestamp": 1396011600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            749.56850733
          ]
        },
        {
          "timestamp": 1396011900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            750.37345515
          ]
        },
        {
          "timestamp": 1396012200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            898.72008859
          ]
        },
        {
          "timestamp": 1396012500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            795.20469546
          ]
        },
        {
          "timestamp": 1396012800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            758.81129568
          ]
        },
        {
          "timestamp": 1396013100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            751.55214839
          ]
        },
        {
          "timestamp": 1396013400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            631.9759247
          ]
        },
        {
          "timestamp": 1396013700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            733.19910299
          ]
        },
        {
          "timestamp": 1396014000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.56190476
          ]
        },
        {
          "timestamp": 1396014300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.82142857
          ]
        },
        {
          "timestamp": 1396014600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            758.09260864
          ]
        },
        {
          "timestamp": 1396014900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            744.89292846
          ]
        },
        {
          "timestamp": 1396015200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            741.94798633
          ]
        },
        {
          "timestamp": 1396015500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.72968521
          ]
        },
        {
          "timestamp": 1396015800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            742.46133178
          ]
        },
        {
          "timestamp": 1396016100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            1053.3179013
          ]
        },
        {
          "timestamp": 1396016400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            941.50951838
          ]
        },
        {
          "timestamp": 1396016700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            790.18799557
          ]
        },
        {
          "timestamp": 1396017000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            854.83831672
          ]
        },
        {
          "timestamp": 1396017300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            783.80647841
          ]
        },
        {
          "timestamp": 1396017600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.80885936
          ]
        },
        {
          "timestamp": 1396017900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.19547065
          ]
        },
        {
          "timestamp": 1396018200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            658.5193278
          ]
        },
        {
          "timestamp": 1396018500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            722.46752097
          ]
        },
        {
          "timestamp": 1396018800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            739.63992347
          ]
        },
        {
          "timestamp": 1396019100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            735.16157763
          ]
        },
        {
          "timestamp": 1396019400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            800.5639557
          ]
        },
        {
          "timestamp": 1396019700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            863.64570107
          ]
        },
        {
          "timestamp": 1396020000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            963.36946844
          ]
        },
        {
          "timestamp": 1396020300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            861.75425227
          ]
        },
        {
          "timestamp": 1396020600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            795.15340044
          ]
        },
        {
          "timestamp": 1396020900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            763.48718671
          ]
        },
        {
          "timestamp": 1396021200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            756.07830565
          ]
        },
        {
          "timestamp": 1396021500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            848.20324848
          ]
        },
        {
          "timestamp": 1396021800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            790.86484676
          ]
        },
        {
          "timestamp": 1396022100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.79517165
          ]
        },
        {
          "timestamp": 1396022400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            763.90405316
          ]
        },
        {
          "timestamp": 1396022700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            675.46179402
          ]
        },
        {
          "timestamp": 1396023000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            713.64119843
          ]
        },
        {
          "timestamp": 1396023300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            749.69863545
          ]
        },
        {
          "timestamp": 1396023600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            751.52813953
          ]
        },
        {
          "timestamp": 1396023900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            761.02842016
          ]
        },
        {
          "timestamp": 1396024200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.38727198
          ]
        },
        {
          "timestamp": 1396024500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            759.24212625
          ]
        },
        {
          "timestamp": 1396024800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            751.40670906
          ]
        },
        {
          "timestamp": 1396025100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.89891664
          ]
        },
        {
          "timestamp": 1396025400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            759.89006497
          ]
        },
        {
          "timestamp": 1396025700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            795.53310225
          ]
        },
        {
          "timestamp": 1396026000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            871.21517884
          ]
        },
        {
          "timestamp": 1396026300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            804.14112238
          ]
        },
        {
          "timestamp": 1396026600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.8776412
          ]
        },
        {
          "timestamp": 1396026900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.07813953
          ]
        },
        {
          "timestamp": 1396027200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            751.9533887
          ]
        },
        {
          "timestamp": 1396027500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            723.0248062
          ]
        },
        {
          "timestamp": 1396027800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            695.82598007
          ]
        },
        {
          "timestamp": 1396028100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            718.92013289
          ]
        },
        {
          "timestamp": 1396028400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            765.72734219
          ]
        },
        {
          "timestamp": 1396028700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            763.6082392
          ]
        },
        {
          "timestamp": 1396029000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.35797342
          ]
        },
        {
          "timestamp": 1396029300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            756.6179402
          ]
        },
        {
          "timestamp": 1396029600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.95498339
          ]
        },
        {
          "timestamp": 1396029900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            745.17904762
          ]
        },
        {
          "timestamp": 1396030200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            748.61109635
          ]
        },
        {
          "timestamp": 1396030500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            830.79601329
          ]
        },
        {
          "timestamp": 1396030800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            811.07802879
          ]
        },
        {
          "timestamp": 1396031100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            749.18294574
          ]
        },
        {
          "timestamp": 1396031400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            744.0379402
          ]
        },
        {
          "timestamp": 1396031700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.15415282
          ]
        },
        {
          "timestamp": 1396032000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            754.37486157
          ]
        },
        {
          "timestamp": 1396032300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            694.62923588
          ]
        },
        {
          "timestamp": 1396032600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            712.32193798
          ]
        },
        {
          "timestamp": 1396032900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.66826135
          ]
        },
        {
          "timestamp": 1396033200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            756.55618571
          ]
        },
        {
          "timestamp": 1396033500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.55579316
          ]
        },
        {
          "timestamp": 1396033800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            753.38021382
          ]
        },
        {
          "timestamp": 1396034100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            743.30046512
          ]
        },
        {
          "timestamp": 1396034400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            752.71169435
          ]
        },
        {
          "timestamp": 1396034700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            762.91003322
          ]
        },
        {
          "timestamp": 1396035000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            755.26162791
          ]
        },
        {
          "timestamp": 1396035300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            832.90361019
          ]
        },
        {
          "timestamp": 1396035600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            817.23780731
          ]
        },
        {
          "timestamp": 1396035900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            750.36657807
          ]
        },
        {
          "timestamp": 1396036200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            757.87766574
          ]
        },
        {
          "timestamp": 1396036500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            757.35640956
          ]
        },
        {
          "timestamp": 1396036800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            749.1452744
          ]
        },
        {
          "timestamp": 1396037100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            689.01803679
          ]
        },
        {
          "timestamp": 1396037400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            695.93606814
          ]
        },
        {
          "timestamp": 1396037700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            758.82058602
          ]
        },
        {
          "timestamp": 1396038000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            757.18768065
          ]
        },
        {
          "timestamp": 1396038300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            743.19747028
          ]
        },
        {
          "timestamp": 1396038600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            731.49131783
          ]
        },
        {
          "timestamp": 1396038900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            631.3214893
          ]
        },
        {
          "timestamp": 1396039200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            496.6761076
          ]
        },
        {
          "timestamp": 1396039500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.28903654
          ]
        },
        {
          "timestamp": 1396039800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            513.32991141
          ]
        },
        {
          "timestamp": 1396040100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            569.97594684
          ]
        },
        {
          "timestamp": 1396040400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            519.40355482
          ]
        },
        {
          "timestamp": 1396040700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            464.84789312
          ]
        },
        {
          "timestamp": 1396041000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.27382781
          ]
        },
        {
          "timestamp": 1396041300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            454.82932004
          ]
        },
        {
          "timestamp": 1396041600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            453.75905869
          ]
        },
        {
          "timestamp": 1396041900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            394.10837209
          ]
        },
        {
          "timestamp": 1396042200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            392.14923588
          ]
        },
        {
          "timestamp": 1396042500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            454.17275748
          ]
        },
        {
          "timestamp": 1396042800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.38108527
          ]
        },
        {
          "timestamp": 1396043100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.98883721
          ]
        },
        {
          "timestamp": 1396043400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            448.29129568
          ]
        },
        {
          "timestamp": 1396043700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            448.77040975
          ]
        },
        {
          "timestamp": 1396044000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            442.7154485
          ]
        },
        {
          "timestamp": 1396044300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            446.4613732
          ]
        },
        {
          "timestamp": 1396044600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            510.20767442
          ]
        },
        {
          "timestamp": 1396044900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            519.99069767
          ]
        },
        {
          "timestamp": 1396045200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.6730897
          ]
        },
        {
          "timestamp": 1396045500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.69734219
          ]
        },
        {
          "timestamp": 1396045800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            499.83504983
          ]
        },
        {
          "timestamp": 1396046100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            525.1448062
          ]
        },
        {
          "timestamp": 1396046400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            458.8079402
          ]
        },
        {
          "timestamp": 1396046700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            400.26138479
          ]
        },
        {
          "timestamp": 1396047000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            376.9621811
          ]
        },
        {
          "timestamp": 1396047300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            444.18860465
          ]
        },
        {
          "timestamp": 1396047600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.5793134
          ]
        },
        {
          "timestamp": 1396047900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            449.65406423
          ]
        },
        {
          "timestamp": 1396048200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            449.57475083
          ]
        },
        {
          "timestamp": 1396048500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.0348062
          ]
        },
        {
          "timestamp": 1396048800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            444.93698782
          ]
        },
        {
          "timestamp": 1396049100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            490.29777409
          ]
        },
        {
          "timestamp": 1396049400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            520.77009967
          ]
        },
        {
          "timestamp": 1396049700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            441.06096346
          ]
        },
        {
          "timestamp": 1396050000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.370299
          ]
        },
        {
          "timestamp": 1396050300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.29817276
          ]
        },
        {
          "timestamp": 1396050600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            444.55222621
          ]
        },
        {
          "timestamp": 1396050900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            439.73029871
          ]
        },
        {
          "timestamp": 1396051200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.14043189
          ]
        },
        {
          "timestamp": 1396051500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            407.3379845
          ]
        },
        {
          "timestamp": 1396051800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            377.3720598
          ]
        },
        {
          "timestamp": 1396052100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            455.24999714
          ]
        },
        {
          "timestamp": 1396052400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.28261637
          ]
        },
        {
          "timestamp": 1396052700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.15365449
          ]
        },
        {
          "timestamp": 1396053000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.14688815
          ]
        },
        {
          "timestamp": 1396053300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            455.48403101
          ]
        },
        {
          "timestamp": 1396053600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            453.65488372
          ]
        },
        {
          "timestamp": 1396053900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            493.56781838
          ]
        },
        {
          "timestamp": 1396054200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            537.88035807
          ]
        },
        {
          "timestamp": 1396054500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.57134736
          ]
        },
        {
          "timestamp": 1396054800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            448.59880399
          ]
        },
        {
          "timestamp": 1396055100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.16633444
          ]
        },
        {
          "timestamp": 1396055400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            457.6224031
          ]
        },
        {
          "timestamp": 1396055700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.83202658
          ]
        },
        {
          "timestamp": 1396056000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            454.12624585
          ]
        },
        {
          "timestamp": 1396056300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            433.04312292
          ]
        },
        {
          "timestamp": 1396056600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            401.12607973
          ]
        },
        {
          "timestamp": 1396056900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            458.03388704
          ]
        },
        {
          "timestamp": 1396057200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.37941307
          ]
        },
        {
          "timestamp": 1396057500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.61495017
          ]
        },
        {
          "timestamp": 1396057800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.44534884
          ]
        },
        {
          "timestamp": 1396058100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            449.24899225
          ]
        },
        {
          "timestamp": 1396058400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.58305648
          ]
        },
        {
          "timestamp": 1396058700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            460.73306755
          ]
        },
        {
          "timestamp": 1396059000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            490.26943522
          ]
        },
        {
          "timestamp": 1396059300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            553.40212625
          ]
        },
        {
          "timestamp": 1396059600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            504.78770764
          ]
        },
        {
          "timestamp": 1396059900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            494.16108527
          ]
        },
        {
          "timestamp": 1396060200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            448.92813953
          ]
        },
        {
          "timestamp": 1396060500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            473.64318937
          ]
        },
        {
          "timestamp": 1396060800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            498.58418605
          ]
        },
        {
          "timestamp": 1396061100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            420.22571429
          ]
        },
        {
          "timestamp": 1396061400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            362.1061794
          ]
        },
        {
          "timestamp": 1396061700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.35964563
          ]
        },
        {
          "timestamp": 1396062000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.1744186
          ]
        },
        {
          "timestamp": 1396062300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            449.95320044
          ]
        },
        {
          "timestamp": 1396062600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.55723145
          ]
        },
        {
          "timestamp": 1396062900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            441.45089701
          ]
        },
        {
          "timestamp": 1396063200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            487.57706534
          ]
        },
        {
          "timestamp": 1396063500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            568.81040975
          ]
        },
        {
          "timestamp": 1396063800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            546.61757475
          ]
        },
        {
          "timestamp": 1396064100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.86250277
          ]
        },
        {
          "timestamp": 1396064400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.32941307
          ]
        },
        {
          "timestamp": 1396064700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            436.73554817
          ]
        },
        {
          "timestamp": 1396065000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            452.65802879
          ]
        },
        {
          "timestamp": 1396065300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            450.0055371
          ]
        },
        {
          "timestamp": 1396065600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            451.56581395
          ]
        },
        {
          "timestamp": 1396065900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            456.56890365
          ]
        },
        {
          "timestamp": 1396066200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            427.57666667
          ]
        },
        {
          "timestamp": 1396066500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            360.91162791
          ]
        },
        {
          "timestamp": 1396066800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            440.24057586
          ]
        },
        {
          "timestamp": 1396067100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            460.93774086
          ]
        },
        {
          "timestamp": 1396067400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            488.90199336
          ]
        },
        {
          "timestamp": 1396067700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            447.43543743
          ]
        },
        {
          "timestamp": 1396068000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            439.05697674
          ]
        },
        {
          "timestamp": 1396068300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            481.38
          ]
        },
        {
          "timestamp": 1396068600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            538.02069276
          ]
        },
        {
          "timestamp": 1396068900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            406.23783437
          ]
        },
        {
          "timestamp": 1396069200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            453.75955703
          ]
        },
        {
          "timestamp": 1396069500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            487.42956811
          ]
        },
        {
          "timestamp": 1396069800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            586.59136213
          ]
        },
        {
          "timestamp": 1396070100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            484.43401707
          ]
        },
        {
          "timestamp": 1396070400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            454.8470613
          ]
        },
        {
          "timestamp": 1396070700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            441.50394312
          ]
        },
        {
          "timestamp": 1396071000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            431.59500066
          ]
        },
        {
          "timestamp": 1396071300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            351.87818383
          ]
        },
        {
          "timestamp": 1396071600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            472.71209302
          ]
        },
        {
          "timestamp": 1396071900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            742.91541528
          ]
        },
        {
          "timestamp": 1396072200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            949.97769742
          ]
        },
        {
          "timestamp": 1396072500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            528.47428487
          ]
        },
        {
          "timestamp": 1396072800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            502.17674419
          ]
        },
        {
          "timestamp": 1396073100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            551.9658804
          ]
        },
        {
          "timestamp": 1396073400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            932.8496567
          ]
        },
        {
          "timestamp": 1396073700,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            698.74203765
          ]
        },
        {
          "timestamp": 1396074000,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            632.87335548
          ]
        },
        {
          "timestamp": 1396074300,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            487.86677741
          ]
        },
        {
          "timestamp": 1396074600,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            659.25069767
          ]
        },
        {
          "timestamp": 1396074900,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            650.99240721
          ]
        },
        {
          "timestamp": 1396075200,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            635.54318526
          ]
        },
        {
          "timestamp": 1396075500,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            646.19169435
          ]
        },
        {
          "timestamp": 1396075800,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            544.81027881
          ]
        },
        {
          "timestamp": 1396076100,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            655.93623282
          ]
        },
        {
          "timestamp": 1396076400,
          "fields": [
            "ifInOctets"
          ],
          "data": [
            667.9144186
          ]
        }
      ];

			var fetched_octets = rrd.fetchData('test/db/sample-octets-data.rrd', 'AVERAGE',
                                           {'--start': '1395994500',
                                            '--end': '1396076100'});
			assert.deepEqual(fetched_octets, fetched_expected);
		});
	});

});



