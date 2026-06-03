---
title: Function.ScalarVector
---

# Function.ScalarVector


Crée une fonction scalaire sur une fonction vectorielle, avec traitement par lot de plusieurs appels.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Retourne une fonction scalaire de type `scalarFunctionType` qui appelle `vectorFunction` avec une seule ligne d'arguments et retourne sa sortie unique. Quand la fonction scalaire est appliquée à plusieurs reprises pour chaque ligne d'une table d'entrées, comme dans Table.AddColumn, `vectorFunction` est appliqué à la place, une fois pour toutes les entrées.

Une table dont les colonnes correspondent en termes de nom et de position aux paramètres de `scalarFunctionType` est passée à `vectorFunction`. Chaque ligne de cette table contient les arguments d'un appel à la fonction scalaire, les colonnes correspondant aux paramètres de `scalarFunctionType`.

`vectorFunction` doit retourner une liste de la même longueur que la table d'entrée, dont l'élément à chaque position doit correspondre au résultat de l'évaluation de la fonction scalaire sur la ligne d'entrée à la même position.

Comme il est prévu que la table d'entrée soit fournie en streaming, `vectorFunction` est censé diffuser en streaming sa sortie à mesure que les entrées arrivent (celles-ci étant traitées un bloc à la fois). Notez que `vectorFunction` ne doit énumérer sa table d'entrée qu'une seule fois.


## Examples

### Example #1
Multipliez deux colonnes du tableau d'entrée en traitant les entrées par lots de 100.
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
Calculer les scores des tests par lots de deux et renseigner un champ d'identifiant de lot qui pourra être utilisé pour vérifier que le traitement par lots fonctionne comme prévu.
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
