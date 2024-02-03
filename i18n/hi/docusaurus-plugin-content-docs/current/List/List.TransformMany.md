---
title: List.TransformMany
---

# List.TransformMany


## Description

एक ऐसी सूची लौटाता है जिसके तत्वों को निर्दिष्ट फ़ंक्शनों का उपयोग करके इनपुट सूची से ट्रांसफ़ॉर्म किया जाता है.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

एक सूची लौटाता है जिसके तत्व इनपुट सूची से प्रक्षेपित होते हैं.<br />    <br />    <code>collectionTransform</code> फ़ंक्शन प्रत्येक तत्व को एक मध्यवर्ती सूची में बदल देता है, और अंतिम परिणाम बनाने के लिए <code>resultTransform</code> फ़ंक्शन मूल तत्व के साथ-साथ मध्यवर्ती सूची से एक आइटम प्राप्त करता है.<br />    <br />    <code>collectionTransform</code> फ़ंक्शन में हस्ताक्षर <code>(x as any) as list => ...</code> है, जहां <code>x</code> <code>list</code> में एक तत्व है.    <code>resultTransform</code> फ़ंक्शन परिणाम के आकार को प्रोजेक्ट करता है और इसमें सिग्नेचर होता है <code>(x as any, y as any) as any => ...</code>, जहाँ <code>x</code> एक एलिमेंट है <code>list</code> और <code>y</code> <code>x</code> को <code>collectionTransform</code> तक पास करके बनाई गई सूची का एक तत्व है.


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
