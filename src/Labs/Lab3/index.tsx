import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingandRemovingFromArray";
import ArrayIndexAndLength from "./ArrayIndexandLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditonalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./Forloops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./Todos/TodoItem";
import TodoList from "./Todos/TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import AddPathParameters from "./AddPathParameters";

export default function Lab3() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes></VariableTypes>
      <BooleanVariables></BooleanVariables>
      <IfElse></IfElse>
      <TernaryOperator></TernaryOperator>
      <ConditionalOutputIfElse></ConditionalOutputIfElse>
      <ConditionalOutputInline></ConditionalOutputInline>
      <hr></hr>
      <LegacyFunctions></LegacyFunctions>
      <ArrowFunctions></ArrowFunctions>
      <ImpliedReturn></ImpliedReturn>
      <TemplateLiterals></TemplateLiterals>
      <SimpleArrays></SimpleArrays>
      <ArrayIndexAndLength></ArrayIndexAndLength>
      <AddingAndRemovingToFromArrays></AddingAndRemovingToFromArrays>
      <ForLoops></ForLoops>
      <MapFunction></MapFunction>
      <FindFunction></FindFunction>
      <FindIndex></FindIndex>
      <FilterFunction></FilterFunction>
      <JsonStringify></JsonStringify>
      <House></House>
      <TodoItem></TodoItem>
      <TodoList></TodoList>
      <Spreading></Spreading>
      <hr />
      <Destructing></Destructing>
      <FunctionDestructing></FunctionDestructing>
      <DestructingImports></DestructingImports>
      <Classes></Classes>
      <Styles></Styles>
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <hr />
      <PathParameters></PathParameters>
      <AddPathParameters></AddPathParameters>
    </div>
  );
}
