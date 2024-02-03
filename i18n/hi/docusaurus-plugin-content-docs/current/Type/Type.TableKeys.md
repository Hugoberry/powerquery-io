---
title: Type.TableKeys
---

# Type.TableKeys


## Description

दिए गए तालिका प्रकार के लिए कुंजियों की संभावित रिक्त सूची लौटाता है.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

दिए गए तालिका प्रकार के लिए कुंजियों की संभवतः खाली सूची लौटाता है.<br />    <br />    प्रत्येक कुंजी को निम्नलिखित रूप में एक रिकॉर्ड का उपयोग करके परिभाषित किया गया है:    <ul>      <li>        <code>Columns</code>: कॉलम नामों की एक सूची जो कुंजी  को परिभाषित करती है
      </li>      <li>        <code>प्राथमिक</code>: <code>सही</code> यदि कुंजी तालिका की प्राथमिक कुंजी है; अन्यथा, <code>गलत</code>      </li>    </ul>    


## Examples

### Example #1 
तालिका प्रकार के लिए मुख्य जानकारी लौटाएँ.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
