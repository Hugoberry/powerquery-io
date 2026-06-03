---
title: Function.ScalarVector
---

# Function.ScalarVector


एकाधिक इन्वोकेशन को बैच करते हुए किसी वेक्टर फ़ंक्शन के शीर्ष पर स्केलर फ़ंक्शन बनाता है.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

`scalarFunctionType` प्रकार का एक स्केलर फ़ंक्शन लौटाता है जो तर्कों की एकल पंक्ति के साथ `vectorFunction` को इनवोक करता है और अपना एकल आउटपुट लौटाता है. इसके अतिरिक्त, जब इनपुट की किसी तालिका की प्रत्येक पंक्ति के लिए स्केलर फ़ंक्शन बार-बार लागू किया जाता है, जैसे कि Table.AddColumn में, तो इसकी बजाय `vectorFunction` सभी इनपुट में एक बार लागू किया जाएगा.

`vectorFunction` ऐसी तालिका से पास किया जाएगा, जिसके स्तंभ नाम और स्थिति में `scalarFunctionType` के पैरामीटर मेल खाते हैं. इस तालिका की प्रत्येक पंक्ति में `scalarFunctionType` के पैरामीटर के अनुरूप स्तंभों के साथ स्केलर फ़ंक्शन की एक कॉल के लिए तर्क शामिल हैं.

`vectorFunction` को इनपुट तालिका की समान लंबाई वाली ऐसी सूची लौटाना अनिवार्य है, जिसकी प्रत्येक स्थिति पर आइटम का समान स्थिति की इनपुट पंक्ति पर स्केलर फ़ंक्शन का मूल्यांकन के रूप में समान परिणाम होना चाहिए.

इनपुट तालिका का स्ट्रीम होना अपेक्षित है, इसलिए `vectorFunction` से इनपुट आते ही एक बार में इनपुट के केवल एक चंक के साथ कार्य करने वाले अपने ऑउटपुट को स्ट्रीम करना अपेक्षित है. विशेष रूप से, `vectorFunction` को अपनी इनपुट तालिका एक से अधिक बार इन्यूमरेट नहीं करना चाहिए.


## Examples

### Example #1
इनपुट तालिका के दो कॉलम्स को 100 के बैच में इनपुट को संसाधित करके गुणा करें.
```powerquery
let
    Compute.ScoreScalar = (left, right) => left * right,
    // When Function.ScalarVector batching kicks in, we'll receive all
    // of the inputs for the entire table here at once.
    Compute.ScoreVector = (input) => let
        chunks = Table.Split(input, 100),
        scoreChunk = (chunk) => Table.TransformRows(chunk, each Compute.ScoreScalar([left], [right]))
      in
        List.Combine(List.Transform(chunks, scoreChunk)),
    Compute.Score = Function.ScalarVector(type function (left as number, right as number) as number, Compute.ScoreVector),
    Final = Table.AddColumn(
        Table.FromRecords({
            [a = 1, b = 2],
            [a = 3, b = 4]
        }),
        "Result",
        each Compute.Score([a], [b])
    )
in
    Final
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, Result = 2],
    [a = 3, b = 4, Result = 12]
})
```


### Example #2
दो के बैच में परीक्षण स्कोर की गणना करें और एक बैच ID फ़ील्ड पॉप्युलेट करें, जिसका उपयोग यह सत्यापित करने के लिए किया जा सके कि बैचिंग अपेक्षित रूप से काम कर रही है.
```powerquery
let
  _GradeTest = (right, total) => Number.Round(right / total, 2),
  _GradeTests = (inputs as table) as list => let
    batches = Table.Split(inputs, 2),
    gradeBatch = (batch as table) as list =>
      let
        batchId = Text.NewGuid()
      in
        Table.TransformRows(batch, each [Grade = _GradeTest([right], [total]), BatchId = batchId])
  in
    List.Combine(List.Transform(batches, gradeBatch)),
  GradeTest = Function.ScalarVector(type function (right as number, total as number) as number, _GradeTests),
  Tests = #table(type table [Test Name = text, Right = number, Total = number],
    {
      {"Quiz 1", 3, 4},
      {"Test 1", 17, 22},
      {"Quiz 2", 10, 10}
    }),
  // To break batching, replace [Right] with {[Right]}{0}.
  TestsWithGrades = Table.AddColumn(Tests, "Grade Info", each GradeTest([Right], [Total]), type record),
  // To verify batching, also expand BatchId.
  Final = Table.ExpandRecordColumn(TestsWithGrades, "Grade Info", {"Grade"})
in
  Final
```

Result: 
```powerquery
#table(
    type table [Test Name = text, Right = number, Total = number, Grade = number],
    {
      {"Quiz 1", 3, 4, 0.75},
      {"Test 1", 17, 22, 0.77},
      {"Quiz 2", 10, 10, 1}
    }
)
```




## Category
Function
