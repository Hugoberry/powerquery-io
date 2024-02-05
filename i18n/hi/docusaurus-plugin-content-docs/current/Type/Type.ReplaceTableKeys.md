---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

कुंजियों की निर्दिष्ट की गई सूची द्वारा प्रतिस्थापित सभी कुंजियों के साथ एक नई तालिका प्रकार लौटाता है.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

कुंजियों की निर्दिष्ट सूची द्वारा प्रतिस्थापित सभी कुंजियों के साथ एक नया तालिका प्रकार लौटाता है.<br />    <br />    प्रत्येक कुंजी को निम्नलिखित रूप में एक रिकॉर्ड का उपयोग करके परिभाषित किया गया है:    <ul>      <li>        <code>Columns</code>: कॉलम नामों की एक सूची जो कुंजी  को परिभाषित करती है      </li>      <li>        <code>प्राथमिक</code>: <code>सही</code> यदि कुंजी तालिका की प्राथमिक कुंजी है; अन्यथा, <code>गलत</code>      </li>    </ul>    कुंजियों की निर्दिष्ट सूची को यह सुनिश्चित करने के लिए मान्य किया गया है कि एक से अधिक प्राथमिक कुंजी परिभाषित नहीं की गई है और सभी कुंजी कॉलम नाम तालिका प्रकार पर मौजूद हैं.    


## Examples

### Example #1 
तालिका प्रकार पर मुख्य जानकारी बदलें.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
तालिका प्रकार पर पहले से परिभाषित मुख्य जानकारी साफ़ करें.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
