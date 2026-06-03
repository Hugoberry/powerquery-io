---
title: Table.Distinct
---

# Table.Distinct


Supprime les doublons de lignes de la table.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Supprime les lignes dupliquées de la table. Un paramètre facultatif, `equationCriteria`, spécifie les colonnes de la table testées pour la duplication. Si `equationCriteria` n’est pas spécifié, toutes les colonnes sont testées.  
  
Parce que Power Query décharge parfois certaines opérations sur des sources de données de back-end (appelées "pliage") et optimise parfois les requêtes en ignorant les opérations qui ne sont pas strictement nécessaires, en général il n’existe aucune garantie de conservation des doublons spécifiques. Par exemple, vous ne pouvez pas supposer que la première ligne avec un ensemble unique de valeurs de colonnes reste et que les lignes plus bas dans la table sont supprimées. Si vous voulez que la suppression des doublons se comporte de manière prévisible, commencez par mettre la table en mémoire tampon à l’aide de `Table.Buffer`.


## Examples

### Example #1
Supprime les lignes en doublon dans la table.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Supprime les doublons de lignes de la colonne \[b\] dans la table `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
