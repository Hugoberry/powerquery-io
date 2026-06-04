---
title: Function.ScalarVector
---

# Function.ScalarVector


Kreira skalarnu funkciju na vrhu vektorske funkcije, grupišući više pozivanja.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Vraća skalarnu funkciju tipa `scalarFunctionType` koja poziva `vectorFunction` sa jednim redom argumenata i vraća jedan rezultat. Pored toga, kada se skalarna funkcija stalno primenjuje za svaki red tabele unosa, kao što je Table.AddColumn, `vectorFunction` će biti primenjen jednom za sve unose.

`vectorFunction` će proslediti tabelu čije kolone se podudaraju po imenu i položaju parametara za `scalarFunctionType`. Svaki red ove tabele sadrži argumente za jedan poziv za skalarnu funkciju, sa kolonama koje odgovaraju parametrima za `scalarFunctionType`.

`vectorFunction` mora da vrati listu iste dužine kao ulazna tabela, čija stavka na svakom položaju mora biti isti rezultat kao procena skalarne funkcije u ulaznom redu istog položaja.

Očekuje se da je ulazna tabela strimovana, tako da se očekuje da `vectorFunction` strimuje rezultat kako se pojavi unos, radeći samo sa jednim unosom istovremeno. `vectorFunction` posebno ne sme da prebrojava ulaznu tabelu više od jednom.


## Examples

### Example #1
Pomnožite dve kolone ulazne tabele tako što ćete obraditi unose u grupama od 100.
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
Izračunajte rezultate testova u grupama od po dve i popunite polje za ID grupe koje se može koristiti za proveru da li grupisanje funkcioniše na očekivani način.
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
