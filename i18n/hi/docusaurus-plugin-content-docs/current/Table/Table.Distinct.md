---
title: Table.Distinct
---

# Table.Distinct


## Description

तालिका से डुप्लिकेट पंक्तियाँ निकालता है.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Details

यह तालिका से डुप्लिकेट पंक्तियाँ हटाता है.  एक वैकल्पिक पैरामीटर, <code>equationCriteria</code>, निर्दिष्ट करता है कि तालिका के किन स्तंभों का डुप्लिकेशन के लिए परीक्षण किया गया है. यदि <code>equationCriteria</code> निर्दिष्ट नहीं है, तो सभी स्तंभों का परीक्षण किया जाता है.<br />   <br />   क्योंकि Power Query कभी-कभी डेटा स्रोतों (जिसे "फ़ोल्डिंग" के रूप में जाना जाता है) को बैकएंड करने के लिए कुछ कार्रवाइयों को ऑफ़लोड करता है और कभी-कभी उन कार्रवाइयों को छोड़कर  द्वारा क्वेरीज़ को ऑप्टिमाइज़ करता है जो आवश्यक नहीं हैं, सामान्य तौर पर कोई गारंटी नहीं है कि किस विशिष्ट डुप्लिकेट को संरक्षित किया जाएगा.  उदाहरण के लिए, आप यह नहीं मान सकते हैं कि तालिका में स्तंभ मानों के एक अद्वितीय सेट वाली पहली पंक्ति बनी रहेगी और नीचे की पंक्तियों को हटा दिया जाएगा. यदि आप चाहते हैं कि डुप्लिकेट निष्कासन अनुमानित रूप से व्यवहार करे, तो पहले <code>Table.Buffer</code> का उपयोग करके तालिका बफ़र करें.


## Examples

### Example #1 
तालिका से डुप्लिकेट पंक्तियाँ निकालें.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2 
तालिका &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; में मौजूद स्तंभ [b] से डुप्लिकेट पंक्तियाँ निकालें.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
