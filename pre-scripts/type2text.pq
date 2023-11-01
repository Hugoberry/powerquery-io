(_type)=> 
try 
    Value.Metadata(_type)[Documentation.Name]
otherwise
    Table.Schema(
        #table(type table [tmpVar = _type], {})
    )[Kind]{0}