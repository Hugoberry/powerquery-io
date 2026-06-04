---
title: Function.ScalarVector
---

# Function.ScalarVector


Δημιουργεί μια συνάρτηση ανυσματικής τιμής επάνω σε μια διανυσματική συνάρτηση, που συγκεντρώνει πολλές κλήσεις σε δέσμη.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Remarks

Επιστρέφει μια συνάρτηση ανυσματικής τιμής τύπου `scalarFunctionType` που καλεί το `vectorFunction` με μία μόνο γραμμή ορισμάτων και επιστρέφει τη μοναδική έξοδο. Επιπλέον, όταν η συνάρτηση ανυσματικής τιμής εφαρμόζεται επανειλημμένα για κάθε γραμμή ενός πίνακα εισόδων, όπως για παράδειγμα στο Table.AddColumn, το `vectorFunction` θα εφαρμόζεται μία φορά για όλες τις εισόδους.

Στο `vectorFunction` θα μεταβιβαστεί ένας πίνακας οι στήλες του οποίου αντιστοιχούν στο όνομα και τη θέση των παραμέτρων του `scalarFunctionType`. Κάθε γραμμή αυτού του πίνακα περιέχει τα ορίσματα για μία κλήση στη συνάρτηση ανυσματικής τιμής, με τις στήλες να αντιστοιχούν στις παραμέτρους του `scalarFunctionType`.

Το `vectorFunction` πρέπει να επιστρέψει μια λίστα με το ίδιο μήκος με τον πίνακα εισόδου, της οποίας το στοιχείο σε κάθε θέση πρέπει να είναι το ίδιο αποτέλεσμα με την αξιολόγηση της συνάρτησης ανυσματικής τιμής στη γραμμή εισόδου της ίδιας θέσης.

Ο πίνακας εισόδου αναμένεται να εισάγεται μέσω ροής, επομένως το `vectorFunction` αναμένεται να εξάγει την έξοδο σε ροή καθώς γίνεται εισαγωγή της εισόδου, χρησιμοποιώντας μόνο ένα τμήμα της εισόδου κάθε φορά. Ειδικότερα, το `vectorFunction` δεν πρέπει να απαριθμήσει τον πίνακα εισόδου του περισσότερες από μία φορές.


## Examples

### Example #1
Πολλαπλασιάστε δύο στήλες του πίνακα εισόδου με την επεξεργασία των εισόδων σε δέσμες του 100.
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
Υπολογίστε βαθμολογίες δοκιμών σε δέσμες των δύο και συμπληρώστε ένα πεδίο αναγνωριστικού δέσμης που μπορεί να χρησιμοποιηθεί για να επαληθευτεί ότι η λειτουργία δέσμης λειτουργεί όπως αναμένεται.
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
