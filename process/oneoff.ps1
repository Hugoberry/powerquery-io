# Define the path to the target folder
$targetFolder = "C:\git\hub\powerquery-io\i18n\es\docusaurus-plugin-content-docs\current"

# Get all the subfolders in the target folder
$subfolders = Get-ChildItem -Path $targetFolder -Directory

foreach ($folder in $subfolders) {
    # Construct the new folder name by converting the existing name to lowercase
    $newName = $folder.Name.ToLower()

    # Only proceed if the new name is different from the old name
    if ($newName -ne $folder.Name) {
        # Construct the full path for the new folder name
        $newPath = Join-Path -Path $folder.Parent.FullName -ChildPath $newName
        
        # Check if a folder with the new name already exists to avoid conflicts
        if (!(Test-Path -Path $newPath)) {
            # Rename the folder
            Rename-Item -Path $folder.FullName -NewName $newName
        } else {
            Write-Host "A folder with the name `'$newName`' already exists. Skipping `'$($folder.Name)`'."
        }
    }
}
