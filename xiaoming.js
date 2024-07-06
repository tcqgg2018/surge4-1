const url = $request.url;
const body = $response.body;
let jsonData = JSON.parse(body);

// 根据请求的 URL 进行不同的处理
if (url.includes('/openAd')) {
    // 去除开屏广告信息
    if (jsonData.ads) {
        jsonData.ads = [];
    }
} else if (url.includes('/getMembershipInfo')) {
    // 模拟会员信息
    jsonData.membership = {
        "is_vip": true,
        "vip_type": "year",
        "vip_expire_time": 1672502399, // 假设一个未来的时间戳
        "features": {
            "remove_ads": true,
            "premium_support": true,
            "additional_features": true
        }
    };
}

$done({ body: JSON.stringify(jsonData) });