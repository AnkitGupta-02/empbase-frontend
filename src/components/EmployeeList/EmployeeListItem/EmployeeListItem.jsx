import React, { Fragment } from "react";

export default function EmployeeListItem({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRow = data.map((item) => {
    const renderedCells = config.map((column) => {
      if (column.action) {
        return <Fragment key={column.label}>{column.action(item)}</Fragment>;
      }
      
      return (
        <td className="p-2 " key={column.label}>
          {column.render(item)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRow}</tbody>
    </table>
  );
}
