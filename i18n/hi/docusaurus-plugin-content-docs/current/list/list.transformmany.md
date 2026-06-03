---
title: List.TransformMany
---

# List.TransformMany


एक ऐसी सूची लौटाता है जिसके तत्वों को निर्दिष्ट फ़ंक्शनों का उपयोग करके इनपुट सूची से ट्रांसफ़ॉर्म किया जाता है.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

एक सूची लौटाता है जिसके तत्व इनपुट सूची से प्रक्षेपित होते हैं.  
  
`collectionTransform` फ़ंक्शन प्रत्येक तत्व को एक मध्यवर्ती सूची में बदल देता है, और अंतिम परिणाम बनाने के लिए `resultTransform` फ़ंक्शन मूल तत्व के साथ-साथ मध्यवर्ती सूची से एक आइटम प्राप्त करता है.  
  
`collectionTransform` फ़ंक्शन में हस्ताक्षर `(x as any) as list => ...` है, जहां `x` `list` में एक तत्व है. `resultTransform` फ़ंक्शन परिणाम के आकार को प्रोजेक्ट करता है और इसमें सिग्नेचर होता है `(x as any, y as any) as any => ...`, जहाँ `x` एक एलिमेंट है `list` और `y` `x` को `collectionTransform` तक पास करके बनाई गई सूची का एक तत्व है.


## Examples

### Example #1
लोगों और उनके पालतू पशुओं की सूची को समतल करें.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
