---
title: SparkPost.GetTable
---

# SparkPost.GetTable


SparkPost API v1 से उपलब्ध मैट्रिक्स की एक तालिका लौटाता है


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

इस फ़ंक्शन का उपयोग SparkPost API v1 के विशेष "मैट्रिक्स" समाप्ति बिंदु से डेटा पुनर्प्राप्त करने के लिए किया जा सकता है. इन तालिकाओं को ताज़ा करते समय या इस कनेक्टर का उपयोग करके SparkPost API को कॉल करते समय, ध्यान रखें कि SparkPost API की निश्चित API दर सीमा है. यदि आपको SparkPost सर्वर से एक 429 स्थिति कोड मिलता है, तो इसका मतलब है कि आप दर सीमा तक पहुँच गए हैं और आपको अधिक कॉल करने के लिए कुछ क्षण प्रतीक्षा करनी होगी. दिन पैरामीटर की कुल संख्या के लिए किसी मान का चयन करते समय, ध्यान रखें कि API केवल 6 महीने का डेटा संग्रहीत करता है.


## Examples

### Example #1 
पिछले तीन दिनों में एकीकृत किए गए सभी campaign_ids के लिए count_sent और count_rejected वितरण योग्यता मैट्रिक्स पुनर्प्राप्त करता है. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
तालिका
```



