import Add from "./Add";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import Square from "./Square";
import VariablesAndConstants from "./VariablesAndConstants";
import Highlight from "./Highlight";
import VariableTypes from "./VariableTypes";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import JsonStringify from "./JsonStringify";
import TodoList from "./todos/TodoList";
import House from "./House";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import Classes from "./Classes";
import DestructingImports from "./DestructingImports";
import FunctionDestructing from "./FunctionDestructing";
import Styles from "./Styles";
import PathParameters from "./PathParameters";

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
      <TodoList></TodoList>
      <Spreading></Spreading>
      <Destructing></Destructing>
      <FunctionDestructing></FunctionDestructing>
      <DestructingImports></DestructingImports>
      <Classes></Classes>
      <Styles></Styles>
      <Add a={3} b={4}></Add>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <PathParameters></PathParameters>
    </div>
  );
}
