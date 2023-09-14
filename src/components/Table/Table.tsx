import { Fragment, useContext } from 'react';
import { WorkersContext } from '../../context';
import { Row } from './Row';

// TODO добавить адаптивность
// TODO стили для выбранного работника

const Table = () => {
  const workers = useContext(WorkersContext);

  return (
    <div className="rounded-md border-2 border-neutral-600 p-2">
      <table className="table">
        <thead>
          <tr className="bg-neutral-600">
            <th className="px-2 text-start">Name</th>
            <th className="px-2 text-start">Age</th>
            <th className="px-2 text-start">Subscription</th>
            <th className="px-2 text-start">Employment</th>
          </tr>
        </thead>
        <tbody>
          {workers.length !== 0 ? (
            workers.map(item => (
              <Fragment key={item.id}>
                <Row worker={item} />
              </Fragment>
            ))
          ) : (
            <span>There are no employees to hire.</span>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
