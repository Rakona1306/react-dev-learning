import Separator from "../components/atoms/separator/separator";
import Counter from "../components/organisms/day3/counter/counter";
import TodoApp from "../components/organisms/day3/todo-app/todo-app";
import UserProfileForm from "../components/organisms/day3/user-profile-form/user-profile-form";


export default function Day3(){
    return(

        <div>
            <Separator margin="0">Day 3 Exercise 1</Separator>
            <Counter/>
            <Separator margin="0">Day 3 Exercise 2</Separator>
            <UserProfileForm/>
            <Separator margin="0">Day 3 Exercise 3</Separator>
            <TodoApp />
        </div>
    );
    
}