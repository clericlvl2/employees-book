import { Fragment, useContext } from 'react';
import { WorkersContext } from '../../context';
import { Row } from './Row';
import { COLUMNS_COUNT } from '../../utils/constants.ts';

const Table = () => {
  const workers = useContext(WorkersContext);

  return (
    <div className="rounded-md border-[1px] border-neutral-400 p-2 dark:border-neutral-600">
      <table className="table">
        <thead>
          <tr className="border-[1px] border-neutral-400 bg-neutral-300 dark:border-transparent dark:bg-neutral-600">
            <th className="min-w-[12rem] px-2 text-start">Name</th>
            <th className="min-w-[4rem] px-2 text-start">Age</th>
            <th className="min-w-[8rem] px-2 text-start">Subscription</th>
            <th className="min-w-[8rem] px-2 text-start">Employment</th>
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
            <tr>
              <td colSpan={COLUMNS_COUNT} className="px-2 py-2 text-center">
                There are no employees to hire.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
