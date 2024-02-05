---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

प्रदत्त स्तंभों पर तालिकाओं के बीच एक फ़ज़ी जॉइन निष्पादित करता है और एक नए स्तंभ में जॉइन परिणाम निर्मित करता है.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

<code>key1</code> (<code>table1</code> के लिए) और <code>key2</code> (<code>table2</code> के लिए) द्वारा चुने गए कुंजी स्तंभों के मानों के फ़ज़ी मिलान के आधार पर <code>table1</code> की पंक्तियों को <code>table2</code> की पंक्तियों के साथ जोड़ता है. <code>newColumnName</code> नामक एक नए स्तंभ में परिणाम लौट आते हैं.<br />फ़ज़ी मिलान पाठ की समरूपता के बजाय पाठ की समानता के आधार पर की जाने वाली एक तुलना है.<br />वैकल्पिक <code>joinKind</code> निर्दिष्ट करता है कि किस प्रकार का जॉइन निष्पादित होना है. यदि <code>joinKind</code> निर्दिष्ट नहीं है, तो डिफ़ॉल्ट रूप से बायाँ आउटर जॉइन निष्पादित किया जाता है. विकल्पों में शामिल हैं:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br /><code>joinOptions</code> का एक वैकल्पिक सेट यह निर्दिष्ट करने के लिए शामिल किया जा सकता है कि कुंजी स्तंभों की तुलना कैसे करें. विकल्पों में शामिल हैं:    <ul><li><code>ConcurrentRequests</code> : 1 और 8 के बीच एक संख्या जो समानांतर थ्रेड्स की संख्या को फ़ज़ी मिलान के लिए उपयोग करने के लिए निर्दिष्ट करती है. डिफ़ॉल्ट मान 1 है.</li><li><code>Culture</code> : निर्दिष्ट कल्चर नियमों के आधार पर मिलान वाले रिकॉर्ड्स की अनुमति देता है. यह कोई मान्य कल्चर नाम हो सकता है. उदाहरण के लिए, &quot;ja-JP&quot; का कल्चर विकल्प, जापानी संस्कृति पर आधारित रिकॉर्ड से मेल खाता है. डिफ़ॉल्ट मान &quot;&quot; है, जो अपरिवर्तनीय अंग्रेज़ी कल्चर के आधार पर मेल खाता है.</li><li><code>IgnoreCase</code> : एक तार्किक (सही/गलत) मान, जो केस-असंवेदी कुंजी मिलान की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Grapes&quot; का मिलान &quot;grapes&quot; के साथ किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>IgnoreSpace</code> : एक तार्किक (सही/गलत) मान, जो मेल ढूँढने के लिए पाठ भागों के संयोजन की अनुमति देता है. उदाहरण के लिए, जब सही होता है, तो &quot;Gra pes&quot; का मिलान &quot;Grapes&quot; के साथ किया जाता है. डिफ़ॉल्ट मान सही होता है.</li><li><code>NumberOfMatches</code> : एक पूर्णांक उस मेल खाने वाली पंक्तियों की अधिकतम संख्या को निर्दिष्ट करती है, जो लौटाई जा सकती हैं. उदाहरण के लिए, 1 का मान प्रत्येक इनपुट पंक्ति के लिए ज़्यादा से ज़्यादा एक मेल खाने वाली पंक्ति लौटाएगा. यदि यह विकल्प प्रदान नहीं किया जाता है, तो सभी मेल खाने वाली पंक्तियाँ लौट आती हैं.</li><li><code>SimilarityColumnName</code> : उस स्तंभ का नाम, जो इनपुट मान और उस इनपुट के प्रतिनिधि मान के बीच की समानता को दर्शाता है. डिफ़ॉल्ट मान नल है, इस स्थिति में समानता के लिए एक नया स्तंभ नहीं जोड़ा जाएगा.</li><li><code>Threshold</code> : 0.00 और 1.00 के बीच की संख्या जो समान होने के स्कोर को दिखाती है जिस पर दो मानों का मिलान किया जाएगा.    उदाहरण के लिए, &quot;Grapes&quot; और &quot;Graes&quot; (अनुपलब्ध &quot;p&quot;) केवल तभी मेल खाते हैं जब यह विकल्प 0.90 से कम पर सेट हो.   1.00 का थ्रेशोल्ड केवल सटीक मिलान की अनुमति देता है.    (ध्यान दें कि एक फ़ज़ी &quot;सटीक मिलान&quot; आवरण, शब्द क्रम और विराम चिह्न जैसे अंतरों की उपेक्षा कर सकता है.)     डिफ़ॉल्ट मान 0.80 है.</li><li><code>TransformationTable</code> : एक तालिका जो कस्टम मान मैपिंग के आधार पर रिकॉर्ड्स के मिलान की अनुमति देती है. इसमें &quot;प्रेषक&quot; और &quot;प्रेषित&quot; स्तंभ शामिल होने चाहिए. उदाहरण के लिए, &quot;Grapes&quot; को &quot;Raisins&quot; के साथ समूहीकृत किया गया है, यदि कोई रूपांतरण तालिका &quot;प्रेषक&quot; स्तंभ वाले &quot;Grapes&quot; और &quot;प्रेषित&quot; स्तंभ वाले &quot;Raisins&quot; के साथ प्रदान की गई है. ध्यान दें कि रूपांतरण तालिका में पाठ की सभी पुनरावृत्तियों के लिए रूपांतरण लागू किया जाएगा. ऊपर दिए गए रूपांतरण तालिका के साथ, &quot;Grapes are sweet&quot; के साथ &quot;Raisins are sweet&quot; को भी समूहीकृत किया जाएगा.</li></ul><br />


## Examples

### Example #1 
[FirstName] पर आधारित दो तालिकाओं का बायां इनर फ़ज़ी जॉइन
```powerquery
Table.FuzzyNestedJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  "NestedTable",
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
		    CustomerID = 1,
		    FirstName1 = "Bob",
		    Phone = "555-1234",
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
