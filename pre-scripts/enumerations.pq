let 
    sharedTab = Record.ToTable(#shared),
//select only types from #shared
    selectTypes = Table.SelectRows(sharedTab, each Type.Is(Value.Type([Value]), Type.Type)),
//pull documentation from each type
    docTab = Table.AddColumn(selectTypes, "Documentation", each Text.FromBinary(Json.FromValue(Value.Metadata([Value])))),
    dox = docTab
in
    dox