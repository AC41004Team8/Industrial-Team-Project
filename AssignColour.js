function AssignColour(a)
{
    var target = 0.00;
    var cr = a[9];
    var category = a[6];

    if(category == "Clothing")
    {
        target = 0.4;
    }
    else if(category == "Other")
    {
        target = 0.5;
    }
    else if(category == "Food & Drink")
    {
        target = 0.85;
    }
    else if(category == "Service")
    {
        target = 0.65;
    }

    if(cr >= (target + 0.05))
    {
        return "green";
    }
    else if(cr >= (target - 0.05) && cr < (target + 0.05))
    {
        return "yellow";
    }
    else{
        return "red";
    }
}
