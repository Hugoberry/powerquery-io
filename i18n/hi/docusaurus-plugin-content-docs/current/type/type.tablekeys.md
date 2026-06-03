---
title: Type.TableKeys
---

# Type.TableKeys


दिए गए तालिका प्रकार के लिए कुंजियों की संभावित रिक्त सूची लौटाता है.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

दिए गए तालिका प्रकार के लिए कुंजियों की संभवतः खाली सूची लौटाता है.  
  
प्रत्येक कुंजी को निम्नलिखित रूप में एक रिकॉर्ड का उपयोग करके परिभाषित किया गया है:

-   `Columns`: कॉलम नामों की एक सूची जो कुंजी को परिभाषित करती है
-   `प्राथमिक`: `सही` यदि कुंजी तालिका की प्राथमिक कुंजी है; अन्यथा, `गलत`


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
