let h_list = document.getElementById("list");

let h_name = document.getElementById("name");
let h_count = document.getElementById("count");
let h_add = document.getElementById("add");
let h_remove = document.getElementById("remove");

h_add.addEventListener("click", () => {addElement(h_name.value, h_count.value);});
h_remove.addEventListener("click", () => {addElement(h_name.value, -h_count.value);});

function addElement(name, count)
{
    console.log(name + " " + count)
    let children_ = h_list.children
    for (let index_1=0; index_1 < children_.length; index_1++)
    {
        let elements = children_[index_1].children;
        if (elements[0].innerText == name)
        {
            if (Number(elements[1].innerText) + Number(count) > 0)
            {
                elements[1].innerText = Number(elements[1].innerText) + Number(count);
            }
            else
            {
                removeElement(name);
            }
            return;
        }
    }
    if (Number(count) > 0 && name != "")
    {
        let h_container = document.createElement("div");
        h_container.classList.add("elements")
        h_list.appendChild(h_container);

        let h_name = document.createElement("p");
        h_name.classList.add("name")
        h_name.innerText = name;
        h_container.appendChild(h_name);

        let h_counter = document.createElement("p");
        h_counter.classList.add("counter")
        h_counter.innerText = count;
        h_container.appendChild(h_counter);
    }
}

function removeElement(name)
{
    let children_ = h_list.children
    for (let index_1=0; index_1 < children_.length; index_1++)
    {
        let elements = children_[index_1].children
        if (elements[0].innerText == name)
        {
            children_[index_1].remove()
            return;
        }
    }
}

