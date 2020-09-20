const router = require('koa-router')()
const areaList = require('./area')
/**
 * 用户权限信息
 */
router.get('/area', (ctx) => {
    var newArr = [];
    for (var i in areaList.province_list) {
        var province = {};
        province.areaId = i;
        province.areaName = areaList.province_list[i];
        province.cities = [];
        for (var i_2 in areaList.city_list) {
            var reg = new RegExp(i[0] + i[1] + '[0-9]{4}');
            var city = {};
            if (reg.test(i_2)) {
                city.areaId = i_2;
                city.areaName = areaList.city_list[i_2];
                city.counties = [];
                for (var i_3 in areaList.county_list) {
                    var reg = new RegExp(i_2[0] + i_2[1] + i_2[2] + i_2[3] + '[0-9]{2}');
                    if (reg.test(i_3)) {
                        city.counties.push({
                            areaId: i_3,
                            areaName: areaList.county_list[i_3],
                        })
                    }
                }
                province.cities.push(city)
            }
        }
        newArr.push(province);
    }
    ctx.body = newArr

})
module.exports = router.routes()
