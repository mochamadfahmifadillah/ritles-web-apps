import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


function AppInfo(){

return (

<div className="
text-center
text-sm
text-muted-foreground
py-4
">


<p>
Ritles v1.0.0
</p>


<p className="
flex
justify-center
gap-1
mt-1
">

Balance Your Mind

<FontAwesomeIcon
icon={faHeart}
className="text-green-500"
/>

</p>


</div>

)

}


export default AppInfo;