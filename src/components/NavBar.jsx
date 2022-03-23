import React from 'react';
import './NavBar.css';

function NavBar() {

    return (
        <nav>
            <div className='nav-brand'>
                Sorting Visualizer
            </div>

            <div className='toolbox'>
                <div>
                    <div className='group speed'>
                        <label>Speed</label>
                        <input
                            type='range'
                            min='1'
                            max='10'
                        ></input>
                    </div>

                    <div className='group length'>
                        <label>Length</label>
                        <input
                            type='range'
                            min='5'
                            max={100}
                            step='1'
                        ></input>
                    </div>

                    <select>
                        <option value='bubbleSort'>Bubble Sort</option>
                        <option value='selectionSort'>Selection Sort</option>
                        <option value='insertionSort'>Insertion Sort</option>
                        <option value='mergeSort'>Merge Sort</option>
                        <option value='quickSort'>Quick Sort</option>
                    </select>
                </div>

                <div>
                    <button>
                        New Array
                    </button>
                    <button >
                        Sort
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;