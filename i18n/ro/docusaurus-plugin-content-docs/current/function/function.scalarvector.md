---
title: Function.ScalarVector
---

# Function.ScalarVector


Creează o funcție scalară peste o funcție vectorială, procesând în loturi mai multe invocări.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Returnează o funcție scalară de tip `scalarFunctionType` care invocă `vectorFunction` cu un singur rând de argumente și returnează rezultatul său unic. În plus, când funcția scalară este aplicată repetat pentru fiecare rând al unui tabel de intrări, precum cel din Table.AddColumn, `vectorFunction` se va aplica o singură dată pentru toate datele de intrare.

`vectorFunction` va primi un tabel ale cărui coloane se potrivesc ca nume și poziție cu parametrii `scalarFunctionType`. Fiecare rând din acest tabel conține argumentele pentru o apelare a funcției scalare, în timp ce coloanele corespund parametrilor `scalarFunctionType`.

`vectorFunction` trebuie să returneze o listă de aceeași lungime cu tabelul de intrare, al cărei element din fiecare poziție trebuie să aibă același rezultat ca evaluarea funcției scalare pe rândul de intrare din aceeași poziție.

Se așteaptă ca tabelul de intrare să fie transmis în flux, astfel că se așteaptă ca `vectorFunction` să-și transmită în flux rezultatul pe măsură ce sosesc intrările, lucrând cu un singur bloc de intrare la un moment dat. În special, `vectorFunction` nu trebuie să enumere tabelul său de intrări de mai multe ori.


## Examples

### Example #1
Înmulțiți două coloane din tabelul de intrare procesând datele în loturi de câte 100.
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
Calculați scorurile de test în loturi de două și populați un câmp ID de lot care poate fi utilizat pentru a verifica dacă gruparea funcționează așa cum vă așteptați.
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
