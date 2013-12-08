#Gridify Select

Converts options with tab separated fields into a selectable grid. The entire select is hidden and a button w/ dropdown menu is used in its place. You can still interact with your select using Javascript, as the state changes when the fake select is changed (and vice versa). 

This plugin degrades gracefully by showing the normal select box in the event of a problem.

![Gridify Select Box](http://i.imgur.com/or8vmpb.png)

##Example

    <select name="awesome" id="myselect">
        <option value="0">Name  Age Gender</option>
        <option value="1">Brandon   37  Male</option>
        <option value="1">Frank 18  Male</option>
        <option value="1">Lisa  22  Female</option>
        <option value="1">Bobo  47  Dog</option>
    </select>
    <script type="text/javascript">
        $(function(){
            $('#myselect').gridify_select();
        });
    </script>


###Requirements

- Bootstrap 2.*
- jQuery 1.8.+