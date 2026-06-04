---
title: Function.ScalarVector
---

# Function.ScalarVector


Panaudojant vektoriaus funkciją sukuriama skaliarinė funkcija, vykdanti kelių iškvietimų siuntimą paketais.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Pateikiama `scalarFunctionType` tipo skaliarinė funkcija, kuri iškviečia `vectorFunction` su viena argumentų eilute ir pateikia vieną jos išvestį. Be to, kiekvienai įvesčių lentelės (pvz., Table.AddColumn) eilutei pakartotinai pritaikius skaliarinę funkciją, vietoj jos visoms įvestims bus vieną kartą pritaikyta `vectorFunction`.

`vectorFunction` bus perduota į lentelę, kurios stulpeliai pagal pavadinimą ir padėtį atitiks `scalarFunctionType` parametrus. Kiekvienoje šios lentelės eilutėje pateikiami vieno skaliarinės funkcijos iškvietimo argumentai, naudojant `scalarFunctionType` parametrus atitinkančius stulpelius.

`vectorFunction` turi pateikti tokio paties ilgio sąrašą kaip įvesties lentelė, kurio kiekvienoje pozicijoje esančio elemento rezultatas turi būti toks pats, kaip ir vertinant tos pačios pozicijos įvesties eilutės skaliarinę funkciją.

Numatoma, kad įvesties lentelė bus perduota srautu, todėl tikimasi, kad `vectorFunction` perduos savo išvestį srautu, kai bus gauta įvestis, vienu metu apdorojant tik vieną įvesties segmentą. Tiksliau tariant, `vectorFunction` negali išvardyti įvesties lentelės daugiau nei vieną kartą.


## Examples

### Example #1
Sudauginkite du įvesties lentelės stulpelius, apdorodami įvestis 100 elementų partijoms.
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
Apskaičiuokite testo balus dviejų partijomis ir užpildykite partijos ID lauką, kurį galima naudoti norint patikrinti, ar partija veikia tinkamai.
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
