---
title: Html.Table
---

# Html.Table


## Description

प्रदान किए गए HTML के विरुद्ध निर्दिष्ट CSS चयनकर्ताओं को चलाने के परिणामों वाली तालिका लौटाता है.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

प्रदान किए गए <code>html</code> के विरुद्ध निर्दिष्ट CSS चयनकर्ता चलाने के परिणामों सहित एक तालिका लौटाता है। एक वैकल्पिक रिकॉर्ड पैरामीटर <code>options</code>, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किए जा सकते हैं। रिकॉर्ड में निम्न फ़ील्ड्स हो सकते हैं:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
नमूना html पाठ मान से कोई तालिका लौटाता है।
```powerquery
Html.Table("<div class=""name"">Jo</div><span>प्रबंधक</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
सभी hrefs नमूना html पाठ मान से निकालता है.
```powerquery
Html.Table("<a href=""/test.html"">परीक्षण</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
डेटा पर पहुँच प्राप्त करना
